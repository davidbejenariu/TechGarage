using Microsoft.EntityFrameworkCore;
using site.DAL.Entities;
using site.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace site.DAL.Helpers
{
    public static class UserExtension
    {
        //public static async Task<IQueryable> JoinData(this IQueryable<UserData> data, IQueryable<User> obj)
        //{
        //    return data.Join(obj, b => b.UserId, a => a.Id, (b, a) => new UserModel
        //        {
        //            FirstName = b.FirstName,
        //            LastName = b.LastName,
        //            Email = a.Email,
        //            Phone = b.Phone,
        //            Address = b.Address,
        //            City = b.City,
        //            County = b.County,
        //            Country = b.Country,
        //            Zipcode = b.Zipcode,
        //        });
        //}
        
        // this specifica faptul ca putem folosi functia ca metoda direct pe obiect
        //public static IQueryable IncludeOrders(this IQueryable<User> users)
        //{
        //    return users.Include(x => x.Orders);
        //}

        //public static IQueryable Where1(this IQueryable<User> users)
        //{
        //    return users
        //        .Where(x => x.Role.Name == "admin")
        //        .IncludeOrders();
        //}
    }
}
