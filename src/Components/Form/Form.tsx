import React from 'react';
import classes from './Form.module.css'
import {Input} from "../Input/Input";
import Button from '@mui/material/Button';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';

export const Form = () => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>

        <div className={classes.addForm}>
          <h2>Заповніть форму</h2>
          <div className={classes.titleBtn}>

            <button className={classes.formButtonL}>Фіз. особа</button>
            <button className={classes.formButtonR}>Юр. особа</button>

          </div>
          <div className={classes.inputGroup}>
            <div className={classes.leftGroup}>
              <div className={classes.halfInput}>
                <div>
                  <h4>Ім'я</h4>
                  <input type="text"/>
                </div>
                <div>
                  <h4>Фамілія</h4>
                  <input type="text"/>
                </div>
              </div>
              <div>
                <h4>Назва компаніЇ, організації</h4>
                <input type="text"/>

              </div>
              <div>
                <h4>Email-адрес</h4>
                <input type="text"/>
              </div>
              <div>
                <h4>Номер телефону</h4>
                <input type="text"/>
              </div>
            </div>
            <div className={classes.logoDiv}>
              <a href="#">+ Логотип</a>
            </div>
            <div className={classes.rightGroup}>
              <div>
                <h4>Країна</h4>
                <input type="text"/>
              </div>
              <div className={classes.halfInputR}>
                <div>
                  <h4>Місто</h4>
                  <input type="text"/>
                </div>
                <div>
                  <h4>Штат, район</h4>
                  <input type="text"/>
                </div>
              </div>
              <div>
                <h4>Адреса</h4>
                <input type="text"/>
              </div>
              <div className={classes.halfInputR}>
                <div>
                  <h4>Поштовий індекс</h4>
                  <input type="text"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.typesWrapper}>
          <h2 className={classes.typeTitle}>Види допомоги</h2>
          <h4 className={classes.subtitle}>Ви можете змінити вид допомоги</h4>
          <div className={classes.helpBtnWrapper}>
            <div className={classes.typeOfHelpGroup}>
              <div className={classes.typesButtonWrapper}>
                <button className={classes.typesButton}>
                  <PanToolOutlinedIcon
                    style={{
                      fontSize: '45px',
                      color: 'rgb(185, 203, 223)'
                    }}
                  /></button>
                <span>Зробити</span>
              </div>
              <div className={classes.typesButtonWrapper}>
                <button className={classes.typesButton + ' ' + classes.active}>
                  <AccountBalanceWalletOutlinedIcon
                    style={{
                      fontSize: '45px',
                      color: 'rgb(244, 247, 250)',
                    }}/>
                </button>
                <span className={classes.textActive}>Фінансова допомога</span>
              </div>
              <div className={classes.typesButtonWrapper}>
                <button className={classes.typesButton}>
                  <CheckroomOutlinedIcon
                    style={{
                      fontSize: '45px',
                      color: 'rgb(185, 203, 223)'
                    }}/></button>
                <span className={classes.text}>Матеріальна допомога</span>
              </div>
              <div className={classes.typesButtonWrapper}>
                <button className={classes.typesButton}>
                  <FavoriteBorderOutlinedIcon
                    style={{
                      fontSize: '45px',
                      color: 'rgb(185, 203, 223)'
                    }}/>
                </button>
                <span>Волонтерство</span>
              </div>
            </div>
            <div className={classes.paymentMethod}>

              <div className={classes.cards}>
                <h4>Спосіб оплати</h4>
                <div className={classes.cardsWrapper}>
                  <button className={classes.cardItem}>
                    <div className={classes.cardsIcons}>
                      <div>
                        <img className={classes.cardIcon}
                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADhUlEQVRoge2YwYscRRSHv1c9PTudbZcsIUKilyBIRHJIBIm4OehBvC2adUER/EP0rxEULx726EXIiqIXNSDsLEQSMEZRAuLOTM90T9fz0NO9PTM9szPVQT30BwMzU69+7/2o6uqqgoaGhoaGhob/Dlk1UFVlMEhuWKO7gtwCLgHPTpp/AX5X9NBYOdjcbH9f1R+4AewClf2BQ+BAROb6O6OqcjIY7fei+LgXxbrip3syGO2pqkw++6p6rKvTVdW9iemlLA34azh8rqXmU+BlF/PW2qOOb8T3/asu/YFvgfdE5P6igIUG/o6SHYN+DjztktmmY+JRBEAYhmy02y4yAI+BfRH5sqqx0sBJlLwm6BeA75LRpmOSUYSqZklE2KxnIgbeEJE7sw1zBqIoupLifQdcdMmk1jIa9mFS/GkmYWtrC7/VcpGFbCRuisi98p9mKrmqpHif4Vg8QDKK5ovPxOn1eq6yABeAj2cf7CkDvSjex/GBBUjHCdamC9ttmhJFQ1d5gFeAt8t/FG5UVfrDpAs876o+inqotUtjjDFsb2+7pgDoisgLhV7+ZTBIXqJG8TYdn1k8gLWWOE5c0wBcVdXr+Y/CgDW6W0fVpounziyjOK6TCrK3OVAyIMhOHcVlc3+WdDyukwqyrQgw/RA/U0dxlemTY9eIXUBRa2kEuFRPs2LpfCKxlcwb0Ceg+i9SDGF5Cv1WT3PlnfmasZU8yr+UDfxaR1GMOTsoT7pG7ALmDSj6VR1FY7yVY1vu+6GcYlNXGDBWDuooemsU1d5w3pXmFLUWBs6d838Ajl0VxXgrTSNjDG3faZeecyQidwu9ogARVdWP6ii3/I0zYzqdoE4KgA/LP6aWA1WV3jD5RuCmq3oc9Re+lY3nsX3+vKs0wNfALREplvypMRcRbZG+C/zpmsHfCKhcJkUIw9BVFrIDzQfl4mHGAEAQBA8UeYfsGLc2YgztToDIqQmZFF/jNBYDb4nIz7MNlU/dU4F/x6q8Dvzhks14rWwkRKD+efgx8KaIVC7zS1+JURRdGeN9ItlJaH2s/amdXau86NQ/m/Pvi8iDRQFL170gCO6HHf9VVd0DumskPlLV2+Fm55rv+9eAtfsDt0VkZ1nxsOampN+Pr5euFi/L5GpQ4SHwSJBDTfUgDNs/VvWfnKTyq8XLnF4tPiTbHuRXi5X9GxoaGhoaGv5v/APigYPSbG0suQAAAABJRU5ErkJggg=="/>
                      </div>
                      <div>
                        <img className={classes.cardIcon}
                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAExUlEQVRoge2ZXYhUZRjHf8+ZjzM7M+tSprnajX1hJt6kFW03XlTW6k2BQnmTFEL0jemFRVBeB2HQB0ZiREFFlCQFu10oIWxiheIuYdGNGVRGO+f7zLxPF+ec2VO4zqxas8j8YeA9z/O+z/v/z/M854MX+uijjz766AEkG7hBc4OqeQa4Daj1jlJnCDgKEyLWK7VK8fPUBg0/3C3Irt7SuzAountwwH4BN2hucPxIHT8KHC/e7ro63GtyneC6Oux48XOOHwWOH6kbNEdx/Ogrx4/U8eLtvSY4VzhevCNNwri4ftRQqNMqDdfr8muvyc0FjqNLKMRngIY4fqQA9YGydFg3L5Hxt3pN5FKhL2S+oS9kvuGyEVKczeG6OmwkGiH3PqaWfr+gUvkhP2/aj+8siK4EECPHVYs/U4g3Jl5zplapHABQVcsNmusERlBdpCK/iDGTXrU8vkikkcXzPG+ZWsXRZA1RfaC8rysl6ZNRz+VrhOEqN4g/dvzIpPOiaS8e+df641kMJ4jvcvzwofa1H70L0Gjo4oYfHcnZc79wyz/iedGreX+joYu74X/e0hq07RO1SukBRO5V+AkoWZbenxO6ElgFIPBjzS6OKazI/IJMAVil5msCt6fGP0G/BCYAYyyOZvP/UF2A8HCeg1VqrTkfxwyzllYegpQUHVNYLcotbYdhczZUlbdERN0gXqGaJNiomUx8el82TVqlm2s1OZP9EYPlcrtUbT/eijAIGLL+VV0DHOzEsatmD+zCIYGtwAmgqppkUpBN6ZRQW8V3UtLtjFBgMuWf9YAYK9qmqmWAQds+KSImXWep8ESiVj5LMgeqZm03HLsSslBkWmFC4BGF76bD8DonDFczU0afDA7Kb6paAG5IbXG9XD6V0Jf3s1iCvOgG8ZQbBBvze3hRtFHg2oSU7EX5Nl3QVWnN4far40lcNlsiZc2XFfIGwHQYLgfs1HxKRGKAml3aKfA6SckALFe1PnX96NF2DCNPpVJPV+3CF0gqBFnied41l1CINZ4OFmDYZM2U1VS9UjwEUISb2sQkaXQAEYlrA+XHxLBW4OvMrOhLAGl21wEoZp+ItFA91o6lhY5Z6VpIvVI8ArgAgmxTuD7ZhTdFRAHUFGb6I230PGq18jG3UloPNFMtQ6oqtLMBguxKHgfyXmYzFh37pKu7FoCIRI4fHgZZD1ydmv1WXNo/M0lzt96k0R0/2gtySqR1EooGP75bpb3vR47DVVLkwfPuTec+6VoIAGqNI7o+Z/lwaEjOtt2wInsNECOTqmq7QbwF1E5udCb3nsBEHJSeLFeajytUUsZPFzEHsgkttfYrjICsUVXJMn/RQrRgDoqRe7JrMezJ+y2R06o6BlCtlqYchyEpchi4A6gCMcpJEfZUK6X9MiCx40c3AmOgLc8uv71YxMniNYLoA1F8gEaDhcDvs3H73z51z6oOXQG+iESXMm7Gf26ldRG4UuSv/zL+ZfMa3xcy39AXMt9gAQ1IPm17zGXO8DxvWTqctoBvAFSaW2ZfMj9hKGWcj+IGzdHcscIO13WX9pRdF3Bdd6njxTsdPwqzY4XsoOdlQZ7vNcELQXbQkz96G1U1zwrcqlDvJblOONfRWx999NFHHz3B3+M1eSdJUwN6AAAAAElFTkSuQmCC"/>
                      </div>
                    </div>
                    Карта Visa/MasterCard
                  </button>
                  <div>
                    <button className={classes.cardItem + ' ' + classes.active}>
                      <div>
                        <h3 className={classes.cardIconTitle}>Приват24</h3>
                      </div>
                      Приват24
                    </button>
                  </div>
                  <button className={classes.cardItem}>
                    <div className={classes.cardsIcons}>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACdklEQVR4nO2bzW7TQBDH/xMRp5YjrvAEvAFCKumJ10ACngGUqkjcOFCeouJJkJoc4E24Elsbb1CGA3VqBbv2er+Sdn5SDnE8s+Px7Ozs2AEEQXjI0BChldJLAk5dG2MDAYssTc4GyJmTK81D5HwzTRPj63kUekAf2NyQkUtDjhGrCKjwkRPqc7pJ/9A53zCOOVXIVVPAV07o0r//e/Ac0GaQLX0v2AWSA2IbYIKPqRY0AlZKLwulr03lCFg0HDbW44xcaa7fjf3v+zDzOF+Xl9V5+bq8ZObW6OvSZ3t+nSBToCj1ZzDNdweY5kWpAeA8xPh3EWYKML0FgC3Tyy3o7ObYu77iK6WXu+i5+QyZSk2ETYKE0eN0vCiUXjDQO2SbiiwGZi5MChMBxN/+DcbXudK/mPAjOxm/MlUzTRNyvf8IEgHZJPlYlBsC4zWAJ2C8L0q9BTDvkvVNkAjI15vvxHgxTZOntRzwxliPRbZvI4gDCHjGwOy32syw23/w1kDeWx0QJgkSX4HpwwhcN/qqr7iLXV8bQSIgmyQXIP56e4S/ZCfJpxBjdxEkAojoD4DzQulTBniaTi5M5H32A4LWAUMNPv46wBE+6oCjcoAPnE4B3+3yg+0HtKzTtuyWzIPvB8TGxh7JAT6U5kr/BPDcROaudb1Jn6s6wFcE9K7zKzr6A//pM+knOEdywD3CKgccUhQMRSLARljeD7gHiANiGxAbp5VgiLfHXFWAFU4jIMSrc646QRVe9gK+VoeD7QccM+KA2AbERhwQ24DYiANiGxAbcUBsA2IjDohtQGzEAbENiM2D/9PUoAjw9DTYlnhPiwVBOFr+AhuONLpkX4vqAAAAAElFTkSuQmCC"/>
                    </div>
                    Термінали України
                  </button>
                  <button className={classes.cardItem}>
                    <div className={classes.cardsIcons}>
                      <img
                        src="data:image/png;base64,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"/>
                    </div>
                    WebMoney
                  </button>
                  <button className={classes.cardItem}>
                    <div className={classes.cardsIcons}>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAADHUlEQVRIiZ2Vz4sbZRjHP983yUwySSkW8Qd2sV4UYZGWuuwWQUS0ePCgoBcFbyIIgjcPIv4JVfRQ8KgnQfZQL0pPau12sbJbqJ6kHirIYqXpZjKTTGYeD9mNycybZTcPBIbv88z7eb7vPHlfUYpeMngT6bOy7g1TDMW2GV91WsHXkop5pSoLu8nwouCdQ4Fm4/Kw2XjthNT1JV2FLFYXgAC8EA5GX8xLzjgys3acZneB+oIwzNnysTC8WdZnHPXS0YoPYrCB9OLe7yWhD4G+n6RnffLMooK1OX1+32kGl6eE7+J0eMeMi5XOTQ8A9AaDp9pB8IekuOLI5nwfyV2taAVbvtpCtgOgXG/HafZ7HA9XKiBZ4XNUZEl9oyzmjrM+kBXaBjDsFLBkjkv37tn9k2FIkuRUTu2W592bnVawPC3EsT1sLrsGLJUwf7ebwUlAcZr9AxwHEPpo4mhkzrttBj/vP3e7dmK3P3i9cNlPVQhg7oKkvN8fvrwP2XP3/MRRLx1ewHjfBztUGNvtVmMNGPTT7EeDZyY5sTVxZDZv4g4Vt2rKX5GUxmn21gxk3MQdN4ZYKDizCEHSN+SNc61W688kSR4VfF4tsl/rAEmSnUaEnnWGiHi2O/XBbiOuMOLLdqextddsrZeMPpWsU17EFW69DlA41jBfu/ZJpxl+cJAjMwt3k9HZOB1+LOl8ZQm4EkWNq+OTwfx/VCu4BrBj1gm6NADCMD2WWf2kkz1uplfjNDvvRNNzEQCk5uxd+P8I8g5CjXwTIEqzTUKeBMip4TS2L/m2YRJDZ/ZGFIY3AFyvZw8Cj1Xr9FcURbf/NTsOPHHQip74zZmei6JwfV+oqz5YNatcS5jYBAjS0dPMHlWGuDtbTAbsANflbD0Kgkvl27ZupnO+llSwAeMTfWaDjBudVnD6KPbGjkwdc1wvJ5zZDwCFsaKp77zv9MigdhS8d1CBVKxOT5RjPIlHBs1L7A4GyzL3CGYPTevmbCFH3uE3syBOsy7QLPPbzcZ9kvKjgqrjBiRJdsYDAfhlEQjM2bocW5JUGRAKfbsIBOA/vEo2LD5yQbEAAAAASUVORK5CYII="/>
                    </div>
                    PayPal
                  </button>
                </div>
              </div>

              <div className={classes.card}>
                <h4>Введіть наступні данні</h4>
                <div className={classes.cardBody}>
                  <div>
                    <h4>Номер карти</h4>
                    <div className={classes.cardNumber}>
                      <input type="tel"/>
                      <input type="tel"/>
                      <input type="tel"/>
                      <input type="tel"/>
                    </div>
                  </div>
                  <div className={classes.halfCardInput}>
                    <div>
                      <h4>Термін дії</h4>
                      <input type="tel"/>
                    </div>
                    <div>
                      <h4>CVC/CVV</h4>
                      <input type="tel"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.buttonWrapper}>
              <button className={classes.helpButton}>Допомогти</button>
            </div>
          </div>
        </div>
      </div>

      {/*<Button/>*/}
      {/*<Input/>*/}
    </div>
  )
    ;
};
