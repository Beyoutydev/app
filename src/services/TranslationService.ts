import { languagesCodeMap } from 'src/constants/translations/languagesCodeMap';
import { storageService } from './StorageService';
import { enUS } from 'src/constants/translations/enUS';
import { esES } from 'src/constants/translations/esES';

interface ITranslationWildcardsMap {
    [key:string]: string|number;
}

class TranslationService {
    public translate = (key: string, wildcards?: ITranslationWildcardsMap): string => {
        const translationsMap = this.getTranslationsMap();
        const text = translationsMap[key as any] || key
        if (wildcards) {
            return this.replaceWildcards(text);
        }
        return text;
    };

    private replaceWildcards (text: string, wildcards?: ITranslationWildcardsMap): string {
        if (wildcards) {
            Object.keys(wildcards).forEach(wildcardKey => {
                text = text.replace(`__${wildcardKey}__`, (wildcards[wildcardKey]).toString());
            });
        }
        return text;
    }

    private getTranslationsMap(): Record<string, string> {
        const profileLanguage = storageService.getProfileLanguage();
        const languageCode = languagesCodeMap[profileLanguage]
        switch (languageCode) {
            case 'esES':
                return esES;
            case 'enUS':
                return enUS;
            default:
                return esES;
        }
    };
}

export const translationService = new TranslationService(); 