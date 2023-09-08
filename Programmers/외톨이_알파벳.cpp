#include <string>
#include <vector>
#include <set>

using namespace std;

string solution(string input_string) {
    set<char> answerSet;
    vector<bool> checkVector(26);

    int idx = 0;
    while (idx < input_string.length()) {
        char curr = input_string[idx];
        if (checkVector[curr - 'a']) answerSet.insert(curr);
        else checkVector[curr - 'a'] = true;
        while (idx < input_string.length() && input_string[idx] == curr) {
            idx++;
        }
    }

    if (answerSet.empty()) return "N";
    string answer = "";
    for (auto iter = answerSet.begin(); iter != answerSet.end(); iter++) { 
        answer += *iter;
    }
    return answer;
}