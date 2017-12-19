using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace AppManager.DAL.Entites
{
    [Table("Districts")]
    public class DistrictEntity
    {
        [Key]
        public int DistrictId { get; set; }

        [Required]
        public string DistrictName { get; set; }
    }
}