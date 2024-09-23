using BE_PruebaTecnica.Model;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE_PruebaTecnica.EfCore
{
    [Table("tb_producto")]
    public class Producto
    {
        [Key, Required]
        public int Codigo { get; set; } // Llave primaria
        public string Nombre { get; set; }
        public string Caracteristicas { get; set; }
        public decimal Precio { get; set; }

        public static implicit operator Producto(ProductoModel v)
        {
            throw new NotImplementedException();
        }
    }
}
