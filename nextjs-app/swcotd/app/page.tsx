import CharacterCard from "@/components/characterCard";
import CookieSetter from "@/components/cookieSetter";
import { getCharacterOfTheDay } from "@/utils/swapi";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

const COOKIE_NAME = 'user_identifier';

export default async function Home() {
  const cookieStore = cookies();
  let userIdentifier = cookieStore.get(COOKIE_NAME)?.value;

  if (!userIdentifier) {
    userIdentifier = uuidv4();
  }

  const character = await getCharacterOfTheDay(userIdentifier);

  return (
    <main className="background-img flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl text-yellow font-bold mb-8 font-starjedi text-center">Star Wars Character of the Day</h1>
      <CharacterCard character={character} />
      <CookieSetter cookieName={COOKIE_NAME} userIdentifier={userIdentifier} />
    </main>
  );
}


