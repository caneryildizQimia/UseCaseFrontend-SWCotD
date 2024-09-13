import Cookies from 'js-cookie';

const COOKIE_NAME = 'userIdentifier';
const ONE_DAY_IN_DAYS = 1; 

export function getUserIdentifier(): string | undefined {
    return Cookies.get(COOKIE_NAME);
}

export function setUserIdentifier(identifier: string): void {
    Cookies.set(COOKIE_NAME, identifier, {
        expires: ONE_DAY_IN_DAYS,
        path: '/', 
        sameSite: 'None',
    });
    console.log(Cookies)
}

export function removeUserIdentifier(): void {
    Cookies.remove(COOKIE_NAME, { path: '/' });
}
