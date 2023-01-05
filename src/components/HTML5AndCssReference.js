import React, { Component } from "react";

// Stateless Functional Component

const HTML5AndCssReference = () => {
  return (
    <React.Fragment>
      {/* <!DOCTYPE html>                 <!--HTML 5 Document--> */}
      {/* <!-- tell browser the format of page --> */}
      {/* <html lang="en">*/}
      {/* <!-- let browser know about page attributes --></html>*/}
      {/* <head>
        <title>HTML5 & CSS3</title>
         <!-- encoding format --> 
        <meta charset="utf-8" />
      </head> */}

      {/* <!-- Visual section of page --> */}
      {/* <body> */}
      <nav>
        <ul>
          <li>
            <a href="#HtmlCssReference">Html & CSS Reference</a>
          </li>
          <li>
            <a href="#HTMLViaHTML5">HTML Via HTML5</a>
          </li>
          <li>
            <a href="#SemanticTags">Semantic Tags</a>
          </li>
          <li>
            <a href="#TextListTages">Text List Tages</a>
          </li>
          <li>
            <a href="#Images">Images</a>
          </li>
          <li>
            <a href="#Table">Table</a>
          </li>
          <li>
            <a href="#Links">Links</a>
          </li>

          <li>
            <a href="#Form">Form</a>
          </li>
        </ul>
      </nav>

      <section id="HtmlReference">
        <p>
          <a href="https://www.w3schools.com/tags/">
            All HTML5 Tages: W3School
          </a>
        </p>

        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            All HTML5 Tages: Mozilla
          </a>
        </p>

        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference">
            CSS common properties: Mozilla
          </a>
        </p>

        <p>
          <a href="https://www.w3schools.com/cssref/">
            CSS Properties: W3School
          </a>
        </p>
      </section>

      <section id="HTMLViaHTML5">
        <h1>Section1 : HTML Via HTML5</h1>

        <p>
          HTML <b>Bold tag &lt b &gt</b> => HTML5
          <strong>Strong tag &lt strong &gt</strong>
        </p>

        <p>
          HTML <i>Italic tag &lt i &gt</i> => HTML5
          <em>Emphasize tag &lt em &gt</em>
        </p>

        <p>
          HTML <span>span tag &lt span &gt</span> => HTML5
          <span>span tag &lt span &gt</span>
          <span>
            doesn't do eny thing but Use for add Attribute to grouped things
          </span>
        </p>

        <div>
          <p>div tag &lt div &gt</p>
          use for grouping things together
        </div>

        {/* <!-- Comments 
            --> */}

        <p>
          HTML br tag &lt br &gt <br /> => HTML5
        </p>
        <p>HTML hr tag &lt hr &gt </p>
        <hr />
      </section>

      <section id="SemanticTags">
        <h1>Section 2: Semantic Tags</h1>
        <h3>&lt section &gt tag</h3>
        <p>
          The &lt section &gt tag defines sections in a document, such as
          chapters, headers, footers, or any other sections of the document.
          whereas: The (div) tag defines a division or a section in an HTML
          document. The &lt div &gt tag is used to group block-elements to
          format them with CSS
        </p>

        <article>
          <h3>&lt article &gt tag</h3>
          <p>
            The &lt article &gt tag is one of the new semantic elements
            introduced with HTML5. According to the HTML5 specification : The
            article element represents a section of content that forms an
            independent part of a document or site; for example, a magazine or
            newspaper article, or a blog entry.
          </p>
        </article>

        <aside>
          The &lt aside &gt element represents a section of a page that consists
          of content that is <strong>tangentially related</strong> to the
          content around the aside element, and which could be considered
          separate from that content. Such sections are often represented as
          sidebars in printed typography.
          <blockquote>
            Block quotations start on their own line. The entire block quotation
            is indented 0.5 inches, the same as the indentation for a new
            paragraph, and is double spaced. Block quotations are not surrounded
            by any quotation marks. The punctuation at the end of the block
            quotation goes before the citation.
          </blockquote>
        </aside>
      </section>

      <section id="TextListTages">
        <h1>Section3 : Text List Tages</h1>
        <h3>Ordered List with type of order: A,a,I,i</h3>
        <ol type="i">
          <li>list type="A"</li>
          <li>list type="a"</li>
          <li>list type="I"</li>
          <li>list type="i"</li>
        </ol>

        <h3>Unordered List</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

        <h3>Nested List</h3>
        <ol>
          <li>Item A</li>
          <li>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </li>
          <li>Item B</li>
        </ol>

        <h3>Definition List</h3>
        <dl>
          <dt>term 1:</dt>
          <dd>term 1 description</dd>

          <dt>term 2:</dt>
          <dd>term 2 description</dd>
        </dl>
      </section>

      <section id="Images">
        <h1>Section4 : Images</h1>

        <img
          src="../Images/UdmyJavaScriptImages/back.jpg"
          height="200"
          width="500"
          alt="a picture for background"
        />
        <figcaption>A picture for background</figcaption>

        <img
          src="../Images/UdmyJavaScriptImages/back1.png"
          height="200"
          width="500"
          alt="a picture for background"
        />
        <figcaption>A picture for background</figcaption>

        <img
          src="../Images/testImage.jpg"
          height="200"
          width="500"
          alt="a picture for background"
        />
        <figcaption>A picture for background</figcaption>

        <img
          src="../Images/UdmyJavaScriptImages/back.jpg"
          height="200"
          width="500"
          alt="a picture for background"
        />
        <figcaption>A picture for background</figcaption>
      </section>

      <section id="Table">
        <h1>Section5 : Tables</h1>
        <table>
          <caption>Table Caption</caption>
          <thead>
            <p>You can put every thing (HYML Tag, Form, ....) in Table</p>
            <tr>
              <th>Header1</th>
              <th>Header2</th>
              <th>Header3</th>
              <th>Header4</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>

            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th>Footer1</th>
              <th>Footer2</th>
              <th>Footer3</th>
            </tr>
          </tfoot>
        </table>
      </section>

      <section id="Links">
        <h1>Section6 :Linkes</h1>
        <h4>Used for navigitions, Open Java script Functions, ...</h4>

        <a href="https://www.google.com" target="_blank">
          Google in _blank
        </a>
        <a href="https://www.yahoo.com" target="_parent">
          Google in _parent
        </a>
        <br />
        <br />

        <a href="https://www.Microsoft.com">
          <img
            src="../Images/UdmyJavaScriptImages/back.jpg"
            width="200"
            height="200"
          />
        </a>
      </section>

      <section id="Form">
        <h1>Section6 :Form</h1>
        {/* <!-- Tip: form action  => define javascript file or ASP.Net page or PHP or Seerver page
             Tip: form method  => define sending or receiving data 
         --> */}

        {/* <!-- method="post"    action="../JavaScript/udmyDomManipulation.js" --> */}
        <form>
          <p>
            <label for="txtName">Name : </label>
            <input
              type="text"
              id="txtName"
              name="txtName"
              placeholder="Enter Name"
            />
          </p>

          <p>
            <label for="txtAge">Age : </label>
            <input
              type="number"
              id="txtAge"
              name="txtAge"
              placeholder="Between 10 and 50"
            />
          </p>

          <p>
            <label for="txtEmail">Email : </label>
            <input
              type="email"
              id="txtEmail"
              name="txtEmail"
              placeholder="....@....Com"
            />
          </p>

          <p>
            <label for="txtPassword">Password : </label>
            <input
              type="password"
              id="txtPassword"
              name="txtPassword"
              placeholder="Enter Passsword"
            />
          </p>

          <p>
            <label for="txtDate">Date : </label>
            <input type="date" id="txtDate" name="txtDate" />
          </p>

          <p>
            <label for="txtColor">Color : </label>
            <input type="color" id="txtColor" name="txtColor" />
          </p>

          <p>
            <input type="submit" id="btnSubmit" name="btnSubmit" />
          </p>
        </form>
      </section>
      {/* </body> */}
      {/* </html> */}
    </React.Fragment>
  );
};

export default HTML5AndCssReference;
