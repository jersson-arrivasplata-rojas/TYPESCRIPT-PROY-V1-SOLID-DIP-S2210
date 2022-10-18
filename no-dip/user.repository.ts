
class NoUserRepository {
    getUser(id: number) {
        //Logica para traer usuario de la base de datos
        const user: NoUser = new NoUser(1, "Giomar", "giomar@gmail.com");
        return user;
    }
}
