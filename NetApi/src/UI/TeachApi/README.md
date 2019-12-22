1. żeby były możliwe migracje projekt definiujący docelową platformę powinien posiadać referencję do biblioteki Microsoft.EntityFrameworkCore.Design.  W tej solucji jest to TeachApi określające platformę .Net Core (reszta projektów nie określa platformy - są napisane w .Net Standard). Migrację można dodać poprzez:
dotnet ef migrations add initial -p Infrastructure\Storage\Storage.csproj -s UI\TeachApi\TeachApi.csproj
lub z poziomu PackageManagera:
add-migration initial