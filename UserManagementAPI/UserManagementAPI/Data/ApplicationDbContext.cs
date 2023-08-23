using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using UserManagementAPI.Models;

namespace UserManagementAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        const string APPLICATION_CONNECTION_STRING = "ProjectManagementConnectionString";

        public ApplicationDbContext() :
          base(APPLICATION_CONNECTION_STRING)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}