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
}

export const storageService = new StorageService();
