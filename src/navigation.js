import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {locales, pathnames, localePrefix} from './config';

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix
  });






/* 
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales} from './config';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
  
*/


