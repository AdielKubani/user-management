using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserManagementAPI.Models
{
    public class Task
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Subject { get; set; }
        public bool IsCompleted { get; set; }

        public virtual User User { get; set; }
    }
}