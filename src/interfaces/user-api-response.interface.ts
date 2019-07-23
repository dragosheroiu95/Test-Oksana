import { UserInterface } from './user.interface';
export interface UserApiResponseInterface {
    data: UserInterface[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}
