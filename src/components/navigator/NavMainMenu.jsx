import React from 'react';
import MenuItemComplex from './MenuItemComplex';
import MenuItemSimple from './MenuItemSimple';
import './NavMainMenu.scss';

const NavMainMenu = () => {
  return (
    <div className="nav-main-menu-wrapper">
      <div className="nav-main-menu-row">
        <MenuItemComplex
          mainTitle={'Articoli'}
          subTitle={'Trend, dati e novità del Terzo Settore.'}
        />

        <MenuItemComplex
          mainTitle={'Storie'}
          subTitle={'Letture ed approfondimenti dei fenomeni complessi.'}
        />

        <MenuItemComplex
          mainTitle={'Interviste'}
          subTitle={'Racconti reali di persone ed organizzazioni.'}
        />
      </div>

      <div className="nav-main-menu-row">
        <MenuItemComplex
          mainTitle={'Opinioni'}
          subTitle={'Riflessioni e confronti dei nostri opinionisti.'}
        />

        <MenuItemComplex
          mainTitle={'Podcast'}
          subTitle={
            'Un luogo per dare voce ai protagonisti della sostenibilità.'
          }
        />

        <MenuItemComplex
          mainTitle={'Bookazine'}
          subTitle={'Una rivista da leggere e un libro da conservare.'}
        />
      </div>

      <div className="nav-main-menu-row nav-main-menu-row-multiple">
        <MenuItemSimple title={'Chi siamo'} />
        <MenuItemSimple title={'Comitato editoriale'} />
        <MenuItemSimple title={'Servizi'} />
        <MenuItemSimple title={'Agenda / Eventi'} />
        <MenuItemSimple title={'Mappa dell’attivismo'} />
        <MenuItemSimple title={'Inchieste crowdfunding'} />
      </div>
    </div>
  );
};

export default NavMainMenu;
