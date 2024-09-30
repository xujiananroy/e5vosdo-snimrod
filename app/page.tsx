import "@/styles/bgimage.css";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import clsx from "clsx";
import { QuickTeachers } from "@/components/helyettesites/quickteacher";
import { Menu } from "@/components/menza/menu";
import { Section } from "@/components/home/section";
import { Events } from "@/components/events";
import { RoomChanges } from "@/components/roomchanges/roomchanges";
import { getAuth } from "@/db/dbreq";
import TimetableDay from "@/components/timetable/timetableday";
import FreeRooms from "@/components/freeRooms";
import Welcome from "@/components/home/welcome";
import { Alert } from "@/components/home/alert";
import { ChipBeta } from "@/components/chips";
import TxtLiquid from "@/components/home/txtLiquid";
import SecialDay from "@/components/events/specialDay";

export default async function Home() {
  const selfUser = await getAuth();
  return (
    <div>
      <div className="pb-14 text-center text-foreground">
        {selfUser ? (
          <h1 className="inline text-5xl font-semibold lg:text-5xl">
            Helló <TxtLiquid text={selfUser.nickname} />!
          </h1>
        ) : (
          <div className="inline text-4xl font-semibold lg:text-5xl">
            Helló{" "}
            <p className="inline bg-gradient-to-l from-selfprimary-300 to-selfprimary-700 bg-clip-text text-transparent">
              Eötvös Népe
            </p>
            !
          </div>
        )}
      </div>

      <Welcome />

      <Section title="Zene világnapja" dropdownable={true}>
        <SecialDay />
      </Section>

      {siteConfig.pageSections["teremcserek"] != "hidden" && (
        <Section
          title={"Teremcserék"}
          dropdownable={true}
          defaultStatus={siteConfig.pageSections["teremcserek"]}
        >
          <RoomChanges />
        </Section>
      )}

      {siteConfig.pageSections["helyettesitesek"] != "hidden" && (
        <Section
          title={"Helyettesítések"}
          dropdownable={true}
          defaultStatus={siteConfig.pageSections["helyettesitesek"]}
        >
          <QuickTeachers />
        </Section>
      )}

      {siteConfig.pageSections["menza"] != "hidden" && (
        <Section
          title="Mi a mai menü?"
          dropdownable={true}
          defaultStatus={siteConfig.pageSections["menza"]}
        >
          <Menu
            menu={
              selfUser?.food_menu == "A" || selfUser?.food_menu == "B"
                ? selfUser?.food_menu
                : undefined
            }
          />
        </Section>
      )}

      {siteConfig.pageSections["esemenyek"] != "hidden" && (
        <Section
          title="Események"
          dropdownable={true}
          defaultStatus={siteConfig.pageSections["esemenyek"]}
        >
          <Events />
        </Section>
      )}

      <Section title="Keresel valamit?" className="max-w-xs">
        <Link href={"/clubs"} className="block max-w-fit text-selfprimary">
          Klubok és szakkörök ➜
        </Link>
        <Link href={"/events"} className="block max-w-fit text-selfprimary">
          Összes esemény ➜
        </Link>
        <Link href={"/me"} className="block max-w-fit text-selfprimary">
          Saját beállítások ➜
        </Link>
        <Link
          href={"/clearCacke"}
          className="hidden max-w-fit text-selfprimary"
        >
          Gyorsítótár törlése ➜
        </Link>
      </Section>

      <Section
        title="Hamarosan"
        dropdownable={true}
        defaultStatus="closed"
        className="rounded-2xl bg-gradient-to-r from-selfprimary-50 to-selfprimary-bg"
      >
        <Section
          title="Órarend"
          dropdownable={false}
          defaultStatus="closed"
          className="mx-3 rounded-xl pl-3"
        >
          {0 ? (
            selfUser ? (
              <TimetableDay selfUser={selfUser} />
            ) : (
              <p>Bejelentkezés után láthatod az órarended!</p>
            )
          ) : (
            <p>
              Jelenleg nem elérhető az órarended. Kérjük, nézz vissza később!
            </p>
          )}
        </Section>

        <Section
          title="Szabad teremkereső"
          dropdownable={true}
          defaultStatus="closed"
          chip={<ChipBeta />}
        >
          {0 ? (
            <FreeRooms />
          ) : (
            <p>
              Jelenleg nem elérhető a teremkereső. Kérjük, nézz vissza később!
            </p>
          )}
        </Section>
      </Section>

      <div className="hero bg-[url('/opinion.png')]">
        <div className="bgcolor hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md rounded-lg bg-danger-foreground bg-opacity-70 p-4 text-black backdrop-blur-sm">
            <h1 className={clsx("mb-5 text-4xl font-bold")}>
              Helló Eötvös népe!
              <br />
            </h1>
            <p className={clsx("mb-5 w-auto text-lg lg:text-lg")}>
              A DÖ kötelessége a diákok érdekeinek eleget tenni. Az űrlapon
              megoszthatjátok észrevételeiteket, javaslataitokat és esetleges
              problémáitokat.
              <br />
            </p>
            <Link
              href={siteConfig.links.feedback}
              className={clsx(
                buttonStyles({
                  radius: "full",
                  variant: "solid",
                }),
                "bg-selfsecondary-200",
              )}
            >
              Irány az űrlap!
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden">
        {
          "Az oldal a Budapest V. Kerületi Eötvös József Gimnázium (más néven EJG) Diákönkormányzatának (más néven DÖ) tájékoztató oldala."
        }
      </div>
    </div>
  );
}
