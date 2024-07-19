import { LabelsApi } from "../../dist/index";

const api = new LabelsApi();

test("getItemDescription", async () => {
    const descr = await api.getItemLabel({ itemId: "Q1", languageCode: "en" });
    expect(descr).toBeTruthy();
    expect(descr).toMatch(/universe/i);
});

test("getItemDescriptions", async () => {
    const descrs = await api.getItemLabels({ itemId: "Q1" });
    expect(typeof descrs).toMatch("object");
    expect(descrs?.en).toBeTruthy();
    expect(descrs.en).toMatch(/universe/i);
});

test("getPropertyDescription", async () => {
    const descr = await api.getPropertyLabel({ propertyId: "P31", languageCode: "en" });
    expect(descr).toBeTruthy();
    expect(descr).toMatch(/instance/i);
});

test("getPropertyDescriptions", async () => {
    const descrs = await api.getPropertyLabels({ propertyId: "P31"});
    expect(typeof descrs).toMatch("object");
    expect(descrs?.en).toBeTruthy();
    expect(descrs.en).toMatch(/instance/i);
});