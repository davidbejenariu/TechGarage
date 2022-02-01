using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using site.BLL.Interfaces;
using site.BLL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthManager _authManager;
        
        public AuthController(IAuthManager authManager)
        {
            _authManager = authManager;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            var result = await _authManager.Register(model);

            if (result)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var result = await _authManager.Login(model);

            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest("Login failed");
            }
        }

        [HttpPost("Refresh")]
        public async Task<IActionResult> Refresh(RefreshModel model)
        {
            var result = await _authManager.Refresh(model);

            if (!result.Contains("Bad"))
            {
                return Ok(result);
            }
            else
            {
                return BadRequest("Refresh failed");
            }
        }
    }
}
