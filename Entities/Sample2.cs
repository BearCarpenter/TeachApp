using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table(nameof(Sample2))]
    public class Sample2
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
