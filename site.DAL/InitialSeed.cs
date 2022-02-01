using Microsoft.AspNetCore.Identity;
using site.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace site.DAL
{
    public class InitialSeed
    {
        public readonly RoleManager<Role> _roleManager;

        public InitialSeed(RoleManager<Role> roleManager)
        {
            _roleManager = roleManager;
        }

        public async void CreateRoles()
        {
            string[] roleNames =
            {
                "Admin",
                "Customer"
            };

            foreach (var roleName in roleNames)
            {
                var role = new Role
                {
                    Name = roleName
                };

                _roleManager.CreateAsync(role).Wait();
            }
        }
    }
}
