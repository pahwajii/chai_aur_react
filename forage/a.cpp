#include <bits/stdc++.h>
using namespace std;

class Inventory {
private:
    unordered_map<string, int> items; // itemName → quantity

public:
    void add_item(const string& name, int quantity) {
        items[name] += quantity;
    }

    bool remove_item(const string& name, int quantity) {
        auto it = items.find(name);
        if (it == items.end()) return false;  // Item not found
        if (it->second < quantity) return false; // Not enough quantity

        it->second -= quantity;
        if (it->second == 0) {
            items.erase(it); // Clean removal
        }
        return true;
    }

    void print_inventory() const {
        for (const auto& [name, qty] : items) {
            cout << name << ": " << qty << "\n";
        }
    }
};

int main() {
    Inventory inv;
    inv.add_item("Potion", 5);
    inv.add_item("Elixir", 3);

    inv.remove_item("Potion", 2);
    inv.remove_item("Elixir", 3); // This removes Elixir completely

    inv.print_inventory();
}
