import React, { Component, ReactNode } from "react";
import { Container, ContainerComponents } from "./styles";

interface Props {
  children: ReactNode;
}

export class Chrome extends Component {
  home_url: string;
  
  constructor(props: Props) {
    super(props);
    this.home_url = "https://www.google.com/webhp?igu=1";
    this.state = {
      url: 'https://www.google.com/webhp?igu=1',
      diplay_url: 'https://www.google.com'
    };
  }

  componentDidMount() {
    let lastVisiteUrl = localStorage.getItem('chrome-url');
    let lastVisiteDiplayedUrl = localStorage.getItem('chrome-diplay-url');
    if (lastVisiteUrl !== null && lastVisiteUrl !== undefined) {
      this.setState({
        url: lastVisiteUrl,
        diplay_url: lastVisiteDiplayedUrl
      }, this.refreshChrome);
    }
  }
  
  storeVisiteUrl = (url: string, diplay_url: string) => {
    localStorage.setItem('chrome-url', url);
    localStorage.setItem('chrome-diplay-url', diplay_url);
  }

  refreshChrome = () => {
    document.getElementById('chrome-url');
  }

  goToHome = () => {
    this.setState({url: this.home_url, display_url: "https://www.google.com"});
    this.refreshChrome();
  }

  checkKey = (e: any) => {
    if (e.key === 'Enter') {
      let url = e.target.value;
      let display_url = url;

      url = url.trim();
      if (url.length === 0) return;
      if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
        url = 'http://' + url;
      }

      url = encodeURI(url);
      display_url = url;
      if (display_url.includes('google.com')) {
        url = 'https://www.google.com/webhp?igu=1';
        display_url = 'https://www.google.com';
      }
      this.setState({url, display_url: url});
      this.storeVisiteUrl(url, display_url);
      document.getElementById('chrome-url')?.blur();
    }
  }

  handleDisplayUrl = (e: any) => {
    this.setState({display_url: e.target.value});
  }

  displayUrlBar = () => {
    return (
      <Container className="chrome-url-bar">
        <div onClick={this.refreshChrome}>
          <img src="./themes/Yaru/status/chrome_refresh.svg" alt="Ubuntu Chrome Home" />
        </div>
        <div onClick={this.goToHome}>
          <img src="./themes/Yaru/status/chrome_home.svg" alt="Ubuntu Chrome Home" />
        </div>
        <input onKeyDown={this.checkKey} onChange={this.handleDisplayUrl} id="chrome-url-bar" type="url" spellCheck={false} autoComplete="off"/>
      </Container>
    )
  }
  
  render() {
    return (
      <ContainerComponents className="chrome">
        {this.displayUrlBar()}
        <iframe src="" id="chrome-screen" frameBorder="0" title="Ubuntu Chrome Url"></iframe>
      </ContainerComponents>
    )
  }
}

export default Chrome;

export const displayChrome = () => {
  return <Chrome></Chrome>;
}