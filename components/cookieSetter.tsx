'use client'
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieSetter({ userIdentifier,cookieName }: { userIdentifier: string ,cookieName:string}) {
  useEffect(() => {
    Cookies.set(cookieName, userIdentifier, {
      expires: 1, // 1 day
      path: '/',
    });
  }, [userIdentifier]);

  return null;
}