import { DescriptionsApi } from "../../dist";
// import { DescriptionsApi } from "wikibase-rest-api-ts";

const api = new DescriptionsApi();

test("getItemDescription", async () => {
    const descr = await api.getItemDescription({ itemId: "Q1", languageCode: "en" });
    expect(descr).toBeTruthy();
    expect(descr).toMatch(/space/i);
});

test("getItemDescriptions", async () => {
    const descrs = await api.getItemDescriptions({ itemId: "Q1" });
    expect(descrs).toBeTruthy();
    expect(typeof descrs).toMatch("object");
    expect(descrs.en).toMatch(/space/i);
});

test("getPropertyDescription", async () => {
    const descr = await api.getPropertyDescription({ propertyId: "P31", languageCode: "en" });
    expect(descr).toBeTruthy();
    expect(descr).toMatch(/class/i);
});

test("getPropertyDescriptions", async () => {
    const descrs = await api.getPropertyDescriptions({ propertyId: "P31" });
    expect(descrs).toBeTruthy();
    expect(typeof descrs).toMatch("object");
    expect(descrs.en).toMatch(/class/i);
});