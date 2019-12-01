using Entities;
using Microsoft.EntityFrameworkCore;

namespace Storage
{
    public class SampleContext : DbContext
    {
        public DbSet<Sample> Samples { get; set; }
        public DbSet<Sample2> Samples2 { get; set; }

        public SampleContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sample>(entity =>
            {
                entity.HasData(
                    new Sample
                    {
                        Id = 1,
                        Title = "Mr"
                    },
                    new Sample
                    {
                        Id = 2,
                        Title = "Mr2"
                    });
            });

            modelBuilder.Entity<Sample2>(entity =>
            {
                entity.HasData(
                    new Sample2
                    {
                        Id = 1,
                        Title = "Mr"
                    },
                    new Sample2
                    {
                        Id = 2,
                        Title = "Mr2"
                    });
            });

            base.OnModelCreating(modelBuilder);
        }

    }
}
