const { APP_WEBSITE, APP_NAME } = require("../config/settings");

module.exports.welcome_email = function (username) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <style type="text/css">
      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
      }
      body,
      p,
      table,
      td,
      span,
      h1,
      h2,
      h3,
      a {
        font-family: Arial, Helvetica, sans-serif;
      }

      p,
      a,
      span {
        margin: 0;
      }
      a:hover {
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
      }
      img {
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
        display: block;
      }
      a img {
        border: none;
      }
      table {
        border-spacing: 0;
        margin: 0;
      }
      table td {
        mso-line-height-rule: exactly;
        margin: 0;
      }

      td,
      div,
      p,
      span,
      h1,
      h2,
      h3 {
        color: #001b40;
      }
      .active a:hover {
        text-decoration: none !important;
      }
      .active-green:hover {
        opacity: 0.8 !important;
        background: #72c34d !important;
        transition: all 0.3s ease;
      }
      .active-blue-text:hover {
        opacity: 0.8 !important;
        color: #80baee !important;
        transition: all 0.3s ease;
      }
      .footer-copy {
        color: #8294a0;
      }

      ul {
        margin: 0 0 16px;
        padding-left: 20px;
      }

      li {
        margin-bottom: 16px;
        padding-left: 6px;
      }

      @media (prefers-color-scheme: dark) {
        .light-img {
          display: none !important;
        }
        .dark-img {
          display: block !important;
        }
      }

      @media only screen and (max-width: 700px) {
        /* default style */

        .m-display {
          display: block !important;
          max-height: 100% !important;
          overflow: visible !important;
          mso-hide: all;
        }
        table.m-display {
          display: table !important;
          max-height: 100% !important;
          overflow: visible !important;
          mso-hide: all;
        }
        tr.m-display {
          display: table-row !important;
          max-height: 100% !important;
          overflow: visible !important;
          mso-hide: all;
        }
        td.m-display {
          display: table-cell !important;
          max-height: 100% !important;
          overflow: visible !important;
          mso-hide: all;
        }
        .hide {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          padding: 0 !important;
          font-size: 0 !important;
          line-height: 0 !important;
        }
        .table-holder,
        .thold {
          display: table !important;
          width: 100% !important;
        }
        .tcap {
          display: table-caption !important;
          width: 100% !important;
        }
        .thead {
          display: table-header-group !important;
          width: 100% !important;
        }
        .trow {
          display: table-row !important;
          width: 100% !important;
        }
        .tfoot {
          display: table-footer-group !important;
          width: 100% !important;
        }
        .flex {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        .tflex {
          display: block !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .w-100p {
          width: 100% !important;
        }
        .w-50p {
          width: 50% !important;
        }
        .w-auto {
          width: auto !important;
        }
        /* custom style */
        .fs-15 {
          font-size: 15px !important;
        }
        .fs-16 {
          font-size: 16px !important;
        }
        .fs-18 {
          font-size: 18px !important;
        }
        .fs-23 {
          font-size: 23px !important;
        }
        .fs-28 {
          font-size: 28px !important;
        }
        .lh-23 {
          line-height: 23px !important;
        }
        .lh-24 {
          line-height: 24px !important;
        }
        .lh-26 {
          line-height: 26px !important;
        }
        .lh-38 {
          line-height: 38px !important;
        }

        .p-0 {
          padding: 0 !important;
        }
        .ptb-0 {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        .ptb-15 {
          padding-top: 15px !important;
          padding-bottom: 15px !important;
        }
        .ptb-30 {
          padding-top: 30px !important;
          padding-bottom: 30px !important;
        }
        .ptb-40 {
          padding-top: 40px !important;
          padding-bottom: 40px !important;
        }
        .ptb-50 {
          padding-top: 50px !important;
          padding-bottom: 50px !important;
        }
        .pt-0 {
          padding-top: 0 !important;
        }
        .pt-5 {
          padding-top: 5px !important;
        }
        .pt-15 {
          padding-top: 15px !important;
        }
        .pt-20 {
          padding-top: 20px !important;
        }
        .pt-25 {
          padding-top: 25px !important;
        }
        .pt-30 {
          padding-top: 30px !important;
        }
        .pt-38 {
          padding-top: 38px !important;
        }
        .pt-40 {
          padding-top: 40px !important;
        }
        .pt-45 {
          padding-top: 45px !important;
        }
        .pt-50 {
          padding-top: 50px !important;
        }
        .pb-0 {
          padding-bottom: 0px !important;
        }
        .pb-5 {
          padding-bottom: 5px !important;
        }
        .pb-10 {
          padding-bottom: 10px !important;
        }
        .pb-15 {
          padding-bottom: 15px !important;
        }
        .pb-20 {
          padding-bottom: 20px !important;
        }
        .pb-25 {
          padding-bottom: 25px !important;
        }
        .pb-30 {
          padding-bottom: 30px !important;
        }
        .pb-35 {
          padding-bottom: 35px !important;
        }
        .pb-40 {
          padding-bottom: 40px !important;
        }
        .pb-45 {
          padding-bottom: 45px !important;
        }
        .pb-50 {
          padding-bottom: 50px !important;
        }
        .pl-15 {
          padding-left: 15px !important;
        }
        .pr-15 {
          padding-right: 15px !important;
        }
        .pr-20 {
          padding-right: 20px !important;
        }
        .plr-0 {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .plr-10 {
          padding-left: 10 !important;
          padding-right: 10 !important;
        }
        .plr-15 {
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
        .plr-25 {
          padding-left: 25px !important;
          padding-right: 25px !important;
        }
        .plr-30 {
          padding-left: 30px !important;
          padding-right: 30px !important;
        }
        .plr-35 {
          padding-left: 35px !important;
          padding-right: 35px !important;
        }

        .no-backdrop {
          box-shadow: none !important;
        }
        .white-bg {
          background: #fbfdfe !important;
        }
        .no-border {
          border: 0 !important;
        }
        .icon {
          width: 72px !important;
          max-width: 72px !important;
        }

        /* Mobile Pricing Grid Styling */
        .border {
          border: 1px solid #cdd4d9 !important;
        }
        .border-top {
          border-top: 1px solid #ced5da !important;
        }
        .border-left {
          border-left: 1px solid #ced5da !important;
        }
        .border-right {
          border-right: 1px solid #ced5da !important;
        }

        .radius-all {
          border-radius: 7px !important;
        }
        .radius-tr {
          border-radius: 0 7px 0 0 !important;
        }
        .radius-tl {
          border-radius: 7px 0 0 0 !important;
        }
        .radius-tltr {
          border-radius: 7px 7px 0 0 !important;
        }
        .radius-blbr {
          border-radius: 0 0 7px 7px !important;
        }

        .shadow {
          box-shadow: 2px 2px 4px rgba(232, 217, 174, 1);
        }
      }
    </style>
    <style type="text/css">
      /*Gmail IOS Fix*/
      @media only screen and (max-width: 500px) {
        u ~ div .wrapper {
          min-width: 100vw !important;
        }
      }

      [data-ogsc] .dark-mode {
        display: block !important;
      }
    </style>
    <!--[if gte mso 9]>
      <style type="text/css" media="all">
        body {
          font-size: 0;
          line-height: 0;
        }
        tr {
          font-size: 1px;
          mso-line-height-alt: 0;
          mso-margin-top-alt: 1px;
        }
        a {
          text-decoration: none;
        }
        ul {
          margin-left: 1.7em !important;
        }
        li {
          text-indent: -1.7em !important;
        }
        li p.bullet-spacing {
          line-height: 16px !important;
        }
        .mso-pb-26 {
          padding: 40px 8px 25px !important;
        }
      </style>
    <![endif]-->
  </head>
  <body
    bgcolor="#FBFDFE"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    "
  >
    <style type="text/css">
      div.preheader {
        display: none !important;
      }
    </style>
    
    <!-- snippet -->
    <table
      width="100%"
      align="center"
      cellpadding="0"
      cellspacing="0"
      border="0"
    >
      <tr>
        <td
          style="font-size: 0; line-height: 0; height: 0; max-height: 0"
          align="center"
        >
          <!--[if !mso]><!-->

          <div style="display: none; max-height: 0px; overflow: hidden">
            &nbsp;
            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
          </div>
          <!--<![endif]-->
        </td>
      </tr>
    </table>
    
    <table
      cellpadding="0"
      cellspacing="0"
      style="min-width: 320px"
      width="100%"
      role="presentation"
      class="wrapper"
      bgcolor="#F5F5F5"
    >
      <tr>
        <td align="center" width="100%" bgcolor="#F5F5F5">
          <!-- DYNAMIC CONTENT BLOCK START -->
          <table
            cellpadding="0"
            cellspacing="0"
            style="width: 100%; max-width: 600px"
            width="100%"
            role="presentation"
          >
            <tr>
              <td
                align="center"
                width="100%"
                style="padding: 40px 0 30px"
                class="plr-0 pt-30"
              >
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="width: 100%; max-width: 600px"
                  width="100%"
                  role="presentation"
                >
                  <tr>
                    <!-- logo start-->
                    <td align="center">
                      <a
                        style="text-decoration: none"
                        target="_blank"
                        href="${APP_WEBSITE}"
                        ><img
                          alt="${APP_NAME}"
                          src="${APP_WEBSITE}_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.33d2f7c9.png&w=384&q=75"
                          style="
                            max-width: 100%;
                            height: auto;
                            width: 150px;
                            vertical-align: top;
                          "
                          width="150"
                          alias="${APP_NAME} logo"
                      /></a>
                    </td>
                    <!-- logo end-->
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- DYNAMIC CONTENT BLOCK END -->
        </td>
      </tr>
      <tr>
        <td
          align="center"
          width="100%"
          style="padding-bottom: 10px"
          class="plr-15"
        >
          <table
            cellpadding="0"
            cellspacing="0"
            style="
              width: 700px;
              border: solid 1px #f4ebd1;
              border-radius: 5px;
              box-shadow: 2px 2px 4px rgba(243, 235, 209, 1);
            "
            width="700"
            role="presentation"
            class="w-100p"
            bgcolor="#FBFDFE"
          >
            <tr>
              <td align="center" width="100%">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  role="presentation"
                  align="center"
                >
                  <tr>
                    <td
                      style="padding: 50px 85px"
                      align="center"
                      class="ptb-40 plr-30"
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        role="presentation"
                      >
                        <tr>
                          <!-- intro copy start-->
                          <td align="center">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                            >
                            <tr>
                              <td
                                style="
                                  font-size: 20px;
                                  line-height: 28px;
                                  padding: 10px 0;
                                  text-align: center;
                                  font-weight: 700;
                                "
                              >
                                <p>Welcome to ${APP_NAME} - Invest in Impact </p>
                              </td>
                            </tr>
                              <tr>
                                <td
                                  style="
                                    font-size: 16px;
                                    line-height: 28px;
                                    padding: 10px 0;
                                  "
                                >
                                  <p>Dear ${username},</p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style="
                                    font-size: 16px;
                                    line-height: 28px;
                                    padding: 10px 0;
                                  "
                                >
                                  <p>
                                    It is our pleasure to welcome you as a member of ${APP_NAME} - Invest in Impact. It is people like you who reinforce our belief in the goodness, positivity and optimistic approach of humanity. Today, the world needs people like you who believe in participating and contributing to the change that they aspire for. We appreciate that you have decided to take out time from your busy everyday schedule to take an active interest in philanthropy, in contributing to making this world a better place. We are indeed grateful that you have chosen ${APP_NAME} as a partner in your philanthropic journey. 

                                    As a member of ${APP_NAME} you get to experience a unique strategic portfolio management approach to philanthropy that focuses on a shift from “donating to charity” to “investing in impact”. Just like you may have experts managing your financial portfolio, we manage your philanthropy portfolio. The key features of this portfolio management approach are broadly listed below: 
                                  </p>
                                </td>
                              </tr>

                              <!-- List Start -->
                              <tr>
                                <td
                                  align="center"
                                  width="100%"
                                  style="padding-bottom: 5px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    align="center"
                                  >
                                    <tr>
                                      <td style="padding: 10px 0 0 10px">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="width: 100%"
                                          width="100%"
                                          role="presentation"
                                        >
                                          <tr>
                                            <td
                                              style="
                                                font-size: 15px;
                                                line-height: 25px;
                                                color: #001b40;
                                                font-weight: normal;
                                              "
                                            >
                                              <ul>
                                                <li>
                                                  
                                                  Basic and critical documentation sent by email and available to view and download on your customised member dashboard
                                                </li>

                                                <li>
                                                  Selection of the right social cause/s and NGOs to donate to
                                                  <ul>
                                                    <li>A comprehensive list of social causes and sub causes to choose from</li>
                                                    <li>NGO rating based on a robust rating tool and stringent rating process
                                                    </li>
                                                    <li>A number of filters to shortlist NGOs you would like to donate to</li>
                                                  </ul>
                                                </li>

                                                <li>
                                                  Track your philanthropy portfolio, diversify and manage risk
<ul>
<li>Regular reporting on the utilisation and impact created by your donations
</li>
<li>
  Regular audits, monitoring & evaluation and assessments

</li>
<li>
  We encourage you to donate regularly (like SIP) and spread your donations across multiple NGOs depending upon the size of your contribution

</li>
</ul>
                                                </li>

                                                <li>
                                                  Focus on maximising returns - In case of ${APP_NAME}, we measure returns by the impact in terms of scale, depth and sustainability generated by your portfolio. 

                                                </li>
                                              </ul>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <!-- List End -->

                              <tr>
                                <td
                                  style="
                                    font-size: 16px;
                                    line-height: 28px;
                                    padding: 4px 0 10px;
                                  "
                                >
                                  <p>
                                    We are working continuously to expand our Partner NGO Pool and adding more features and functionalities to the platform. We hope that these will add to the credibility and convenience of using the platform and enhance the engagement and user experience for you. In the meanwhile, we request you to explore our platform and we look forward to receiving suggestions and feedback from you that will help us in our endeavour to continuously improve and move towards excellence. 
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style="
                                    padding-top: 20px;
                                    font-size: 16px;
                                  "
                                >
                                  <p>
                                    With Best Regards,
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style="
                                    font-size: 16px;
                                    line-height: 28px;
                                    padding: 10px 0 20px;
                                  "
                                >
                                  
                                  <a href="${APP_WEBSITE}"
                                    >${APP_NAME}</a
                                  >,
                                  
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
    </table>
  </body>
</html>`;
};

