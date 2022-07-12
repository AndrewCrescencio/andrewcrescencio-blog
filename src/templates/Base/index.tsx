import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { TSettingsStrapi } from '@shared-types/settings-strapi';
import { FcCheckmark } from 'react-icons/fc';

import { ToggleTheme } from '../../components/ToggleTheme';

import {
  Wrapper,
  HeaderContainer,
  SearchContainer,
  SearchInput,
  ContentContainer,
  FootetContainer,
} from './styles';

export type BaseTemplateProps = {
  settings: TSettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef<number | undefined>(undefined);

  {
    /*se a pesquisa já estiver pronta(já foi carregada...) seta o input para disabled*/
  }

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query.q === searchValue) {
      return;
    }

    const q = searchValue;
    if (!q || q.length <= 3) {
      return;
    }

    inputTimeout.current = window.setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

  return (
    <Wrapper>
      {/* <ToggleTheme /> */}
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
      />
      <HeaderContainer>
        <ToggleTheme />
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        ></Header>
      </HeaderContainer>

      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Encontre posts"
          name="q"
          value={searchValue}
          disabled={searchDisabled}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchDisabled ? (
          // <Cancel className="search-cancel-icon" aria-label="Input Disabled" />
          <span>cancel</span>
        ) : (
          // <CheckCircleOutline
          //   className="search-ok-icon"
          //   aria-label="Input enabled"
          // />
          <FcCheckmark className="search-ok-icon" aria-label="Input enabled" />
        )}
      </SearchContainer>

      <ContentContainer>{children}</ContentContainer>

      <FootetContainer>
        <Footer footerHtml={settings.text} />
      </FootetContainer>
      <GoTop />
    </Wrapper>
  );
};
