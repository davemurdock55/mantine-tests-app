import React, { useState } from "react";
import { Card, Text, Pagination, Link } from "@nextui-org/react";

export default function LinksCard({ title, links }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // create a copy of links array to not modify original array
  const linksCopy = [...links];
  // get the links to be displayed on the current page
  const linksToDisplay = linksCopy.splice(
    (currentPage - 1) * itemsPerPage,
    itemsPerPage
  );

  return (
    <Card
      isBlurred
      isHoverable
      shadow
      css={ {
        background: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(10px)",
        maxWidth: "300px",
        minHeight: "300px",
        minWidth: "300px",
        maxHeight: "300px",
      }}
    >
      <Card.Header>
        <Text b>{title}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body
        css={{
          overflowY: "hidden",
          display: "flex",
          // alignItems: "center",
          paddingTop: "0.5rem",
        }}
      >
        <ul css={{ margin: "0" }}>
          {linksToDisplay.map((link) => (
            <li key={link["id"]}>
              <Link block css={{ minWidth: "stretch" }} href="#">
                {link?.["name"]}
              </Link>
            </li>
          ))}
        </ul>
      </Card.Body>
      <Card.Divider />
      <Card.Footer
        justify={links.length > itemsPerPage ? "center" : "flex-end"}
        css={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {links.length > itemsPerPage && (
          <Pagination
            noMargin
            shadow
            total={Math.ceil(links.length / itemsPerPage)}
            initialPage={currentPage}
            onChange={(page) => setCurrentPage(page)}
            css={{ display: "inline-block" }}
          />
        )}
      </Card.Footer>

    </Card>
  );
}
