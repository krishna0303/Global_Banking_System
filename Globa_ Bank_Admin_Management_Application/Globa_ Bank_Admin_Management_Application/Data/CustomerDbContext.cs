using Globa__Bank_Admin_Management_Application.Models;
using Microsoft.EntityFrameworkCore;

namespace Globa__Bank_Admin_Management_Application.Data
{
    public class CustomerDbContext : DbContext
    {
        public CustomerDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Customer> Customers { get; set; }
    }
}
