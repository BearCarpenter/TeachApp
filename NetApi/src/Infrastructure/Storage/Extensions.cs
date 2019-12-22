using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Builder;

namespace Storage
{
    public static class Extensions
    {
        public static IServiceCollection AddDbContext(this IServiceCollection services, string dbConnString)
        {

            services.AddDbContext<SampleContext>(options => options.UseNpgsql(dbConnString));
            return services;
        }

        public static IApplicationBuilder UseMigrations(this IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                serviceScope.ServiceProvider.GetService<SampleContext>().Database.Migrate();
            }

            return app;
        }
    }
}
