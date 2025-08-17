#ifndef DRMS_HPP
#define DRMS_HPP

#include <string>
#include <vector>

// Forward declarations to avoid circular dependencies
class Rivalry;
class RivalryHistory;
class Match;

// ===================== Team =====================
class Team {
private:
    int teamID;
    std::string teamName;
    int morale;
    int fanBaseSize;
    std::pair<int, int> winLossRecord; // wins, losses

public:
    Team(int id, const std::string& name);

    void updateMorale(int change);
    void adjustFanBase(int change);
    std::string getStats() const;
};

// ===================== Rivalry =====================
class Rivalry {
private:
    int rivalryID;
    Team* teamA;
    Team* teamB;
    std::string rivalryName;
    std::vector<RivalryHistory> rivalryHistory;
    int rivalryIntensity;
    double momentumMeter;

public:
    Rivalry(int id, Team* a, Team* b, const std::string& name);

    void updateMomentum();
    int getIntensity() const;
    void resetStreaks();
    const std::vector<RivalryHistory>& getHistory() const;
};

// ===================== RivalryHistory =====================
class RivalryHistory {
private:
    int seasonYear;
    int winnerTeamID;
    int loserTeamID;
    int scoreDifference;
    std::string gameType; // regular/bowl/playoff

public:
    RivalryHistory(int year, int winner, int loser, int diff, const std::string& type);

    void recordMatch();
    int calculateImpact() const;
};

// ===================== Match =====================
class Match {
private:
    int matchID;
    Team* homeTeam;
    Team* awayTeam;
    std::string gameType;
    int scoreHome;
    int scoreAway;
    std::string date;

public:
    Match(int id, Team* home, Team* away, const std::string& type, const std::string& date);

    void playMatch();
    Team* determineWinner() const;
    void updateRivalryStats(Rivalry& rivalry);
};

// ===================== MoraleManager =====================
class MoraleManager {
private:
    std::vector<std::string> moraleChangeRules;

public:
    void applyRivalryMoraleBoost(Team& team);
    void applyRivalryMoralePenalty(Team& team);
};

// ===================== FanEngagement =====================
class FanEngagement {
private:
    int ticketSales;
    int merchandiseSales;
    int fanSentiment; // scale 0-100

public:
    FanEngagement();

    void updateFanSentiment(int change);
    void adjustSalesBasedOnResult(bool win);
};

// ===================== RecruitingManager =====================
class RecruitingManager {
private:
    std::vector<std::string> recruitingBoostRules;

public:
    void applyRecruitingBonus(Team& team);
    void calculateRecruitingImpact(const Team& team);
};

// ===================== RivalryManager =====================
class RivalryManager {
private:
    std::vector<Rivalry> allRivalries;

public:
    Rivalry* findRivalry(const Team& a, const Team& b);
    void updateAllRivalries();
    void getRivalryStats() const;
};

#endif // DRMS_HPP