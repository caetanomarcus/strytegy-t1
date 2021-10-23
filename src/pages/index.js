import React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import Security from '../components/Security'
import { GlobalStyle } from '../components/GlobalStyle'
import Footer from '../components/Footer/Footer'

export const query = graphql`
query {
    alldata {
      estentegies {
        blog
        faq
        lang
        entrar
        securityImage {
          url
        }
        securityTitle
        security1
        mainImg {
          url
        }
        mainSubtitle
        mainTitle
        mainBtn
        cnpj
        copyright
        aboutText
        aboutUs
        firsti
        help
        helpList
        logo {
          url
        }
        slogo {
          url
        }
        social
        socialList
      }
  }
}
`

export default function Index({ data }) {

  const dataMain = data.alldata.estentegies[0]

    return (
        <div>
            <GlobalStyle />
            <Header
                blog={dataMain.blog}
                faq={dataMain.faq}
                enter={dataMain.entrar}
                lang={dataMain.lang}
                image={dataMain.logo.url}
            />
            <Main
              title={dataMain.mainTitle}
              paragraph={dataMain.mainSubtitle}
              btnstart={dataMain.mainBtn}
              image={dataMain.mainImg.url}
              // bottomtitle={dataMain.divtitle}
              // bottomparagraph={dataMain.divparagraph}
              // imagemain={dataMain.gif.url}
              // imgmain={dataMain.imagemain.url}
            />
            <Security
              secImg={dataMain.securityImage.url}
              secTitle={dataMain.securityTitle}
              secList ={dataMain.security1}
            />
            <Footer
            aboutUs={dataMain.aboutUs}
            aboutText={dataMain.aboutText}
            slogo={dataMain.slogo.url}
            copyright={dataMain.copyright}
            firsti={dataMain.firsti}
            cnpj={dataMain.cnpj}
            social={dataMain.social}
            socialList={dataMain.socialList}
            help={dataMain.help}
            helpList={dataMain.helpList}
            />
        </div>
    )
}
