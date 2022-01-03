import { IAuthCredentials } from "src/types";

class StorageService {
    public getProfileLanguage(): 'spanish' | 'english' {
        return (this.isUserAuthenticated() 
            ? (this.getUserFromStorage() as any).language 
            : 'spanish'
        );
    }

    public getUserFromStorage(): boolean {
        return false;
    }

    public isUserAuthenticated(): boolean {
        return false;
    }

    public setAuthCredentials(authCredentials: IAuthCredentials) {
        Object.keys(authCredentials).forEach(key => {
            localStorage.setItem(key, JSON.stringify((authCredentials as any)[key]));
        });
    }
}

export const storageService = new StorageService();
