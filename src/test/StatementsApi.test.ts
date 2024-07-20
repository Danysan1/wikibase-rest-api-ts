import { ResponseError, StatementsApi } from "../../dist";
// import { StatementsApi } from "wikibase-rest-api-ts";

const api = new StatementsApi();

// https://www.wikidata.org/wiki/Q1#Q1$8983b0ea-4a9c-0902-c0db-785db33f767c
const Q1_P31_VALUE = "Q36906466",
    Q1_P31_ID = "Q1$8983b0ea-4a9c-0902-c0db-785db33f767c";

// https://www.wikidata.org/wiki/Property:P31#P31$9d042001-4a7e-2432-a7e1-233360062379
const P31_P31_VALUE = "Q18616576",
    P31_P31_ID = "P31$9d042001-4a7e-2432-a7e1-233360062379";

test("getItemStatement", async () => {
    try {
        const stat = await api.getItemStatement({
            itemId: "Q1", statementId: Q1_P31_ID
        });
        expect(stat).toBeTruthy();
        expect(typeof stat).toMatch("object");
        expect(stat.id).toMatch(Q1_P31_ID);
        expect(stat.property?.id).toMatch("P31");
        expect(stat.value?.content).toMatch(Q1_P31_VALUE);
    } catch (e) {
        if (e instanceof ResponseError) {
            console.error("getItemStatement error:", await e.response.text());
        }
        throw e;
    }
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