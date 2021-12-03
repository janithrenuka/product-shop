using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace product_shop_backend.Models
{
    public class Phone
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Price { get; set; }
        [Required]
        public bool Available { get; set; }
        [Required]
        public string Img { get; set; }
        [Required]
        public string  Info { get; set; }
    }
}
