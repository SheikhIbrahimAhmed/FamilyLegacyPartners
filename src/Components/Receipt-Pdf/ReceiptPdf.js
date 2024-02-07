import React from "react";
import { Page, View, Document, StyleSheet, Text } from "@react-pdf/renderer";
import logoImage from "../../assets/logo EMWA.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: "100%",
    height: "100%",
    justifyContent: "center", // Center horizontally
  },
  container: {
    marginLeft: 350,
    padding: 10,
    flexGrow: 1,
    border: "2px solid #000",
    display: "flex",
    // alignItems: "center", // Center vertically
    width: 650, // Fixed width in pixels
    height: 560,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    display: "flex",
    fontWeight: "bold", // Make the text bolder
    fontFamily: "Arial, sans-serif", // Use a good-looking font
    fontSize: 23,
    marginTop: 46,
    marginLeft: 30,
    whiteSpace: "nowrap",
  },
  line: {
    borderTop: "2px solid #000", // Use borderTop for a horizontal line
    width: 65,
    marginTop: 122, // Adjust the margin top as needed
  },
});

const ReceiptPdf = () => (
  <Document>
    <Page size={{ width: 300, height: 200 }} style={styles.page}>
      <View style={styles.container}>
        <img style={styles.logo} src={logoImage} alt="img not loaded" />
        <Text style={styles.text}>
          Estate Mirza Willayat Ali Building Lahore
        </Text>
        <View style={styles.line}></View>
      </View>
    </Page>
  </Document>
);

export default ReceiptPdf;
