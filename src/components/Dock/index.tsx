import {
  Desktop,
  Folder,
  FolderUser,
  Trash,
  AppStoreLogo,
  SpotifyLogo,
  DiscordLogo,
  MessengerLogo,
  GoogleChromeLogo,
  TerminalWindow,
} from "phosphor-react";
import {SiVisualstudiocode} from "react-icons/si";
import { Container } from "./style";


export function Dock() {
  return (
    <Container>
      <a href="" className="desktop">
        <Desktop size={32} />
      </a>
      <a href="" className="AppStore">
        <AppStoreLogo size={32} />
      </a>
      <a href="" className="discord">
        <DiscordLogo size={32} weight="fill" />
      </a>
      <a href="" className="spotify">
        <SpotifyLogo size={32} weight="fill"/>
      </a>
      <a href="" className="messenger">
        <MessengerLogo size={32} weight="fill"/>
      </a>
      <a href="" className="chrome">
        <GoogleChromeLogo size={32} weight="fill"/>
      </a>
      <a href="" className="terminal">
        <TerminalWindow size={32} weight="fill"/>
      </a>
      <a href="" className="vscode">
        <SiVisualstudiocode size={32} />
      </a>
      <div className="border">
        |
      </div>
      <a href="" className="folder">
        <Folder size={34} weight="fill" />
      </a>
      <a href="" className="folder_user">
        <FolderUser size={34} weight="fill" />
      </a>
      <div className="border">
        |
      </div>
      <a href="" className="trash">
        <Trash size={32} />
      </a>
    </Container>
  );
}
