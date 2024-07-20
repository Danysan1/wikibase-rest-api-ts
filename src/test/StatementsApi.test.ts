import { Q1_P31_ID, Q1_P31_VALUE, P31_P31_ID, P31_P31_VALUE } from "./constants";
import { StatementsApi } from "../../dist";
// import { StatementsApi } from "wikibase-rest-api-ts";

const api = new StatementsApi();

test("getItemStatement", async () => {
    const stat = await api.getItemStatement({
        itemId: "Q1", statementId: Q1_P31_ID
    });
    expect(stat).toBeTruthy();
    expect(typeof stat).toMatch("object");
    expect(stat.id).toMatch(Q1_P31_ID);
    expect(stat.property?.id).toMatch("P31");
    expect(stat.value?.content).toMatch(Q1_P31_VALUE);
});

test("getItemStatements", async () => {
    const stats = await api.getItemStatements({ itemId: "Q1" });
    expect(stats).toBeTruthy();
    expect(typeof stats).toMatch("object");

    expect(stats["P31"]).toBeTruthy();
    const stat = stats["P31"].find(s => s.id === Q1_P31_ID);

    expect(stat).toBeTruthy();
    expect(stat?.property?.id).toMatch("P31");
    expect(stat?.value?.content).toMatch(Q1_P31_VALUE);
});

test("getItemStatements with property", async () => {
    const stats = await api.getItemStatements({ itemId: "Q1", property: "P31" });
    expect(stats).toBeTruthy();
    expect(typeof stats).toMatch("object");

    expect(stats["P31"]).toBeTruthy();
    const stat = stats["P31"].find(s => s.id === Q1_P31_ID);

    expect(stat).toBeTruthy();
    expect(stat?.property?.id).toMatch("P31");
    expect(stat?.value?.content).toMatch(Q1_P31_VALUE);
});

test("getPropertyStatement", async () => {
    const stat = await api.getPropertyStatement({
        propertyId: "P31", statementId: P31_P31_ID
    });
    expect(stat).toBeTruthy();
    expect(typeof stat).toMatch("object");
    expect(stat.id).toMatch(P31_P31_ID);
    expect(stat.property?.id).toMatch("P31");
    expect(stat.value?.content).toMatch(P31_P31_VALUE);
});

test("getPropertyStatements", async () => {
    const stats = await api.getPropertyStatements({ propertyId: "P31" });
    expect(stats).toBeTruthy();
    expect(typeof stats).toMatch("object");

    expect(stats["P31"]).toBeTruthy();
    const stat = stats["P31"].find(s => s.id === P31_P31_ID);

    expect(stat).toBeTruthy();
    expect(stat?.property?.id).toMatch("P31");
    expect(stat?.value?.content).toMatch(P31_P31_VALUE);
});

test("getStatement", async () => {
    const stat = await api.getStatement({ statementId: Q1_P31_ID });
    expect(stat).toBeTruthy();
    expect(typeof stat).toMatch("object");
    expect(stat.id).toMatch(Q1_P31_ID);
    expect(stat.property?.id).toMatch("P31");
    expect(stat.value?.content).toMatch(Q1_P31_VALUE);
});