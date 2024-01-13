"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass, SignOut } from "phosphor-react";
import { Navbar as NavbarKeep, Button } from "keep-react";
import { ROUTES } from "../constants";

export const Navbar = () => {
  const router = useRouter();

  const onSignOut = async () => {
    await signOut({ redirect: false });
    router.push(ROUTES.HOME);
  };

  return (
    <NavbarKeep fluid={true}>
      <NavbarKeep.Container className="flex items-center justify-between">
        <NavbarKeep.Container className="flex items-center">
          <NavbarKeep.Brand>
            <Image
              src="/images/holafly-logo.svg"
              alt="keep"
              width="100"
              height="60"
            />
          </NavbarKeep.Brand>
          <NavbarKeep.Divider></NavbarKeep.Divider>
          <NavbarKeep.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <NavbarKeep.Link linkName="Home" href="#" />
            <NavbarKeep.Link linkName="Mobile plans" href="#" />
            <NavbarKeep.Link linkName="About us" href="#" />
          </NavbarKeep.Container>
          <NavbarKeep.Collapse collapseType="sidebar">
            <NavbarKeep.Container tag="ul" className="flex flex-col gap-5">
              <NavbarKeep.Link linkName="Home" href="#" />
              <NavbarKeep.Link linkName="Mobile plans" href="#" />
              <NavbarKeep.Link linkName="About us" href="#" />
            </NavbarKeep.Container>
            <NavbarKeep.Container className="flex-1 flex items-end">
              <Button size="sm" type="texButton">
                Logout
                <span className="pl-2">
                  <SignOut size={18} />
                </span>
              </Button>
            </NavbarKeep.Container>
          </NavbarKeep.Collapse>
        </NavbarKeep.Container>
        <NavbarKeep.Container className="flex gap-2 items-center">
          <Button size="sm" type="link" className="md:block hidden">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-600">Search</span>
          </Button>
          <span className="md:block hidden">|</span>
          <Button
            size="sm"
            type="texButton"
            className="md:block hidden"
            onClick={onSignOut}
          >
            <span className="ml-2 text-metal-600">Logout</span>
            <span className="pl-2">
              <SignOut size={20} />
            </span>
          </Button>
          <NavbarKeep.Toggle />
        </NavbarKeep.Container>
      </NavbarKeep.Container>
    </NavbarKeep>
  );
};
