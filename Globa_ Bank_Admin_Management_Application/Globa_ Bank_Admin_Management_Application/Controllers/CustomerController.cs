using Globa__Bank_Admin_Management_Application.Data;
using Globa__Bank_Admin_Management_Application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Globa__Bank_Admin_Management_Application.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly CustomerDbContext _context;
        public CustomerController(CustomerDbContext context)
        {
            _context = context;

        }
        [HttpGet]
        public async Task<IActionResult> GetAllCustomerAccountDetails()
        {
            var customers = await _context.Customers.ToListAsync();

            return Ok(customers);
        }

        [HttpGet]
        [Route("{accountNumber:int}")]
        [ActionName("GetCustomerAccountDetails")]
        public async Task<IActionResult> GetCustomerAccountDetails([FromRoute] int accountNumber)
        {
            var customer = await _context.Customers.FirstOrDefaultAsync(x=>x.AccountNumber==accountNumber);

            if (customer != null)
            {
                return Ok(customer);
            }
            else
            {
                return NotFound("Customer not found!");
            }
        }
        [HttpPost]
        public async Task<IActionResult> AddCustomerAccount([FromBody] Customer customer)
        {

           

        
            
                await _context.Customers.AddAsync(customer);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetCustomerAccountDetails), customer.AccountNumber, customer);

            
            
             
        }

        [HttpPut]
        [Route("{accountNumber:int}")]
        public async Task<IActionResult> UpdateCustomerAccount([FromRoute] int accountNumber ,[FromBody] Customer customer)
        {
            var existingCustomer = await _context.Customers.FirstOrDefaultAsync(x => x.AccountNumber == accountNumber);

            if (existingCustomer != null)
            {
                existingCustomer.AccountNumber = customer.AccountNumber;
                existingCustomer.CustomerNumber = customer.CustomerNumber;
                existingCustomer.AccountOpeningDate=customer.AccountOpeningDate;
                existingCustomer.AccountStatus = customer.AccountStatus;
                existingCustomer.AccountType = customer.AccountType;
                existingCustomer.BranchId = customer.BranchId;
                existingCustomer.OpeningBalance = customer.OpeningBalance;
                await _context.SaveChangesAsync();
                return Ok(existingCustomer);    
            }
            else
            {
                return NotFound("Customer not found!");
            }
           
        }

        [HttpDelete]
        [Route("{accountNumber:int}")]
        public async Task<IActionResult> DeleteCustomerAccount([FromRoute] int accountNumber)
        {
            var existingCustomer = await _context.Customers.FirstOrDefaultAsync(x => x.AccountNumber == accountNumber);

            if (existingCustomer != null)
            {
                _context.Customers.Remove(existingCustomer);
                await _context.SaveChangesAsync();
                return Ok(existingCustomer);
            }
            else
            {
                return NotFound("Customer not found!");
            }

        }






    }
}
