import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdminAlreadyExists = this.usersRepository.findById(user_id);
    const user = this.usersRepository.list();
    if (!userAdminAlreadyExists.admin) {
      throw new Error("User does not have permission");
    }
    if (!userAdminAlreadyExists) {
      throw new Error("User does not exist");
    }
    return user;
  }
}

export { ListAllUsersUseCase };
