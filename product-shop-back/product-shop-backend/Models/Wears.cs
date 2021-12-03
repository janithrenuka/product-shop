using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace product_shop_backend.Models
{
    public class Wears
    {
        [Key]
        public int Id{ get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Type { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public string Size { get; set; }
        [Required]
        public bool Available { get; set; }
        [Required]
        public string Img { get; set; }
        [Required]
        public string Info { get; set; }
    }
}
