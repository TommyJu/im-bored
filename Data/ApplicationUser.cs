using im_bored.Models;
using Microsoft.AspNetCore.Identity;

namespace im_bored.Data;

// Add profile data for application users by adding properties to the ApplicationUser class
public class ApplicationUser : IdentityUser
{
    public int Points { get; set; } = 0;
    // Relationship: list of activities this user has saved
    public ICollection<Activity> Activities { get; set; } = [];
}

