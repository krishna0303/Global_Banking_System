using System.ComponentModel.DataAnnotations;

namespace Globa__Bank_Admin_Management_Application.Models
{
    public class Customer
    {
        [Key]
        public int AccountNumber { get; set; }
        public int CustomerNumber { get; set; }
        
        
        public int BranchId { get; set; }
        public int OpeningBalance { get; set; }
        public DateTime AccountOpeningDate { get; set; }
        public string? AccountType { get; set; }
        public bool AccountStatus { get; set; }
    }
}
