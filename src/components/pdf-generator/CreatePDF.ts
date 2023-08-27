import jsPDF from "jspdf";
import cover from "../../assets/image/pdf-cover.png";
import data from "./data.json";

interface maxW { maxWidth: number }

const { main, why, how, deeper }: any = data;
const lineWidth: maxW = { maxWidth: 8.27 - 2 };
const lineWidth2: maxW = { maxWidth: 8.27 - 2.4 };

interface pdf {
  doc: any
  text: string | number
  x: number
  y: number
}

function title(doc: any, text: string | number, x: number, y: number) {
  doc.setFontSize(22);
  doc.setTextColor(36, 99, 235);
  doc.text(text, x, y, lineWidth);
}
function li(doc: any, text: string | number, x: number, y: number) {
  doc.setFontSize(12);
  doc.setTextColor(75, 85, 99);
  doc.text("\u2022 ", x, y);
  doc.text(text, x + 0.2, y, lineWidth);
}
function p(doc: any, text: string | number, x: number, y: number) {
  doc.setFontSize(12);
  doc.setTextColor(75, 85, 99);
  doc.text(text, x, y, lineWidth);
}
function addLeftBar(doc: any, x1: number, y1: number, x2: number, y2: number) {
  doc.setDrawColor(36, 99, 235);
  doc.setLineWidth(0.025);
  doc.line(x1, y1, x2, y2);
}
function li2(doc: any, text: string | number, x: number, y: number) {
  doc.setFontSize(12);
  doc.setTextColor(75, 85, 99);
  doc.text("\u2022 ", x, y);
  doc.text(text, x + 0.2, y, lineWidth2);
}
function p2(doc: any, text: string | number, x: number, y: number) {
  doc.setFontSize(12);
  doc.setTextColor(75, 85, 99);
  doc.text(text, x, y, lineWidth2);
}
function a(doc: any, text: string | number, x: number, y: number, options = { url: "www.kraal.ai" }) {
  doc.setTextColor(36, 99, 235);
  doc.textWithLink(text, x, y, options);
}

function page1(doc: any) {
  doc.addImage(cover, "png", 0, 0);
}
function page2(doc: any) {
  doc.insertPage();

  doc.setFontSize(14);
  doc.setTextColor(75, 85, 99);
  doc.text(main[0].p.bold + " " + main[0].p.text, 1, 1, lineWidth);

  doc.setFontSize(12);

  li(doc, main[1].ul[0].bold + " " + main[1].ul[0].text, 1, 1.6);
  li(doc, main[1].ul[1].bold + " " + main[1].ul[1].text, 1, 2.1);

  p(doc, main[2].p.bold + " " + main[2].p.text, 1, 2.7);

  // Why it matters
  const yForWhy = 4;
  title(doc, why[0].title, 1, yForWhy);

  doc.setFontSize(12);
  p(doc, why[1].p.bold + " " + why[1].p.text, 1, yForWhy + 0.4);
  li(doc, why[2].ul[0], 1, yForWhy + 1);
  li(doc, why[2].ul[1], 1, yForWhy + 1.3);
  li(doc, why[2].ul[2], 1, yForWhy + 1.6);
  p(doc, why[3].p.bold + why[3].p.text, 1, yForWhy + 2);
  p(doc, why[4].p.bold + why[4].p.text, 1, yForWhy + 2.9);

  // How it works
  const yForHow = 8;
  title(doc, how[0].title, 1, yForHow);

  addLeftBar(doc, 1, yForHow + 0.25, 1, yForHow + 2);
  p2(
    doc,
    how[1].box[0].p.bold + " " + how[1].box[0].p.text,
    1.2,
    yForHow + 0.4
  );
  li2(doc, how[1].box[1].ul[0], 1.2, yForHow + 1);
  p2(doc, how[1].box[2].p.text, 1.2, yForHow + 1.6);
  a(doc, how[1].box[2].p.a.text, 1.2, yForHow + 2);

  // How it works box 2
  const yBox2 = 10.2;
  addLeftBar(doc, 1, yBox2 + 0.25, 1, yBox2 + 0.59);
  p2(doc, how[2].box[0].p.bold + " " + how[2].box[0].p.text, 1.2, yBox2 + 0.4);
}
function page3(doc: any) {
  doc.insertPage();

  // How it works box 2
  const yBox2 = 1;
  addLeftBar(doc, 1, yBox2 - 0.15, 1, yBox2 + 1.24);
  li2(doc, how[2].box[1].ul[0], 1.2, yBox2);
  li2(doc, how[2].box[1].ul[1], 1.2, yBox2 + 0.2);
  li2(doc, how[2].box[1].ul[2], 1.2, yBox2 + 0.4);
  p2(doc, how[2].box[2].p.text, 1.2, yBox2 + 0.8);
  a(doc, how[2].box[2].p.a.text, 1.2, yBox2 + 1.2);

  // How it works box 3
  const yBox3 = 2.8;
  addLeftBar(doc, 1, yBox3 - 0.15, 1, yBox3 + 2);
  p2(doc, how[3].box[0].p.bold + " " + how[3].box[0].p.text, 1.2, yBox3);
  li2(doc, how[3].box[1].ul[0], 1.2, yBox3 + 1);
  li2(doc, how[3].box[1].ul[1], 1.2, yBox3 + 1.2);
  p2(doc, how[3].box[2].p.text, 1.2, yBox3 + 1.6);
  a(doc, how[3].box[2].p.a.text, 1.2, yBox3 + 2);

  // How it works box 4
  const yBox4 = 5.4;
  addLeftBar(doc, 1, yBox4 - 0.15, 1, yBox4 + 1.62);
  p2(doc, how[4].box[0].p.bold + " " + how[4].box[0].p.text, 1.2, yBox4);
  li2(doc, how[4].box[1].ul[0], 1.2, yBox4 + 0.6);
  li2(doc, how[4].box[1].ul[1], 1.2, yBox4 + 0.8);
  p2(doc, how[4].box[2].p.text, 1.2, yBox4 + 1.2);
  a(doc, how[4].box[2].p.a.text, 1.2, yBox4 + 1.6);

  // How it works box 5
  const yBox5 = 7.6;
  addLeftBar(doc, 1, yBox5 - 0.15, 1, yBox5 + 1.62);
  p2(doc, how[5].box[0].p.bold + " " + how[5].box[0].p.text, 1.2, yBox5);
  li2(doc, how[5].box[1].ul[0], 1.2, yBox5 + 0.6);
  li2(doc, how[5].box[1].ul[1], 1.2, yBox5 + 0.8);
  p2(doc, how[5].box[2].p.text, 1.2, yBox5 + 1.2);
  a(doc, how[5].box[2].p.a.text, 1.2, yBox5 + 1.6);

  // How it works box 6
  const yBox6 = 9.6;
  addLeftBar(doc, 1, yBox6 - 0.15, 1, yBox6 + 1.41);
  p2(doc, how[6].box[0].p.bold + " " + how[6].box[0].p.text, 1.2, yBox6);
  a(doc, how[6].box[0].p.a.text, 1.2, yBox6 + 0.6);
  p2(doc, how[6].box[1].p.text, 1.2, yBox6 + 1);
}
function page4(doc: any) {
  doc.insertPage();
  const initialY = 1;

  title(doc, deeper[0].title, 1, initialY);

  addLeftBar(doc, 1, initialY + 0.3, 1, initialY + 1.5);
  p(doc, deeper[1].box[0].p.text, 1.2, initialY + 0.45);
  a(doc, deeper[1].box[0].p.a.text, 1.2, initialY + 0.9);
  p(doc, deeper[1].box[1].p.text, 1.2, initialY + 1.3);
}

export default function CreatePDFFile(callback: (doc: any) => void) {
  let doc = new jsPDF("p", "in", "a4");

  page1(doc);
  page2(doc);
  page3(doc);
  page4(doc);

  // ***
  if (callback) {
    callback(doc);
  }

  //   doc.save("kraal.pdf");
  return doc.output("bloburl");
}
