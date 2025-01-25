import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const getUser  = () => {
    return new Promise<string>((resolve, reject) => {
        const token = Cookies.get('token');

        if (token) {
            try {
                const { userId }: { userId: string } = jwtDecode(token);
                resolve(userId);
            } catch (error) {
                reject('Invalid token');
            }
        } else {
            reject('Token not found');
        }
    });
};

export default getUser ;