
class UserLocalRepository implements IUserRepository {
    getUser(id: number): User {
        //Logica para traer usuario de la base de datos
        const user: User = new User(1, "Giomar", "giomar@gmail.com");
        return user;
    }
}
