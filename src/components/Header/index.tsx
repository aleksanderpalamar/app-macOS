import { AppleLogo, BatteryFull, MagnifyingGlass, SpeakerHigh, WifiHigh } from "phosphor-react";
import { useEffect, useState } from "react";
import { ClockComponent } from "../Clock";
import { DateTime } from "../Date";
import { Container, Header } from "./styles";

export function HeaderComponent() {
  return (
    <Header>
      <div>
        <AppleLogo size={20} weight="fill" />
        <a href="">
          <span>Finder</span>
        </a>
        <a href="">
          <span>File</span>
        </a>
        <a href="">
          <span>Edit</span>
        </a>
        <a href="">
          <span>View</span>
        </a>
        <a href="">
          <span>Window</span>
        </a>
        <a href="">
          <span>Help</span>
        </a>
      </div>
      <div>
        
      </div>
      <div>
        <WifiHigh size={20} />
        <BatteryFull size={20} weight="fill" />
        <SpeakerHigh size={20} weight="fill" />
        <ClockComponent />
        <DateTime />
        <MagnifyingGlass size={20} />
      </div>
    </Header>
  );
}
