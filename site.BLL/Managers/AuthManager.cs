using Microsoft.AspNetCore.Identity;
using site.BLL.Interfaces;
using site.BLL.Models;
using site.DAL;
using site.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace site.BLL.Managers
{
    public class AuthManager : IAuthManager
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly ITokenHelper _tokenHelper;
        private readonly AppDbContext _context;

        public AuthManager(UserManager<User> userManager,
            SignInManager<User> signInManager,
            ITokenHelper tokenHelper,
            AppDbContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenHelper = tokenHelper;
            _context = context;
        }

        public async Task<LoginResult> Login(LoginModel loginModel)
        {
            var user = await _userManager.FindByEmailAsync(loginModel.Email);

            if (user == null)
            {
                return new LoginResult
                {
                    Success = false
                };
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginModel.Password, false);

            if (result.Succeeded)
            {
                var token = await _tokenHelper.CreateAccessToken(user);
                var refreshToken = _tokenHelper.CreateRefreshToken();

                user.RefreshToken = refreshToken;
                await _userManager.UpdateAsync(user);

                return new LoginResult
                {
                    Success = true,
                    AccessToken = token,
                    RefreshToken = refreshToken
                };
            }
            else
            {
                return new LoginResult
                {
                    Success = false
                };
            }
        }

        public async Task<string> Refresh(RefreshModel refreshModel)
        {
            var principal = _tokenHelper.GetPrincipalFromExpiredToken(refreshModel.AccessToken);
            var username = principal.Identity.Name;

            var user = await _userManager.FindByEmailAsync(username);

            if (user.RefreshToken != refreshModel.RefreshToken)
            {
                return "Bad Refresh";
            }

            var newJwtToken = await _tokenHelper.CreateAccessToken(user);

            return newJwtToken;
        }

        public async Task<bool> Register(RegisterModel registerModel)
        {
            var user = new User
            {
                Email = registerModel.Email,
                UserName = registerModel.Email
            };

            var result = await _userManager.CreateAsync(user, registerModel.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, registerModel.Role);

                var userData = new UserData
                {
                    FirstName = registerModel.FirstName,
                    LastName = registerModel.LastName,
                    Phone = registerModel.Phone,
                    Address = registerModel.Address,
                    City = registerModel.City,
                    County = registerModel.County,
                    Country = registerModel.Country,
                    Zipcode = registerModel.Zipcode,
                    UserId = user.Id
                };

                await _context.UsersData.AddAsync(userData);
                await _context.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
