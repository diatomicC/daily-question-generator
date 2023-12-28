document.addEventListener('DOMContentLoaded', function() {

    const dailyQuestions = [
        "질문",
        "새해의 시작을 어떻게 맞이했나요? 올해의 목표는 무엇인가요?",
        "오늘 하루 동안 가장 기억에 남는 순간은 무엇이었나요?",
        "최근 읽은 책이나 본 영화에 대해 느낀 점은 무엇인가요?",
        "오늘 하루 중 가장 감사했던 순간은 무엇인가요?",
        "내가 자랑스러워하는 나의 성격이나 능력은 무엇인가요?",
        "지금까지 겪은 어려움 중 하나를 이겨낸 경험은?",
        "나를 행복하게 만드는 작은 일상의 순간들은 무엇인가요?",
        "내 삶에서 중요한 사람에게 하고 싶은 말은 무엇인가요?",
        "지금 나의 가장 큰 고민은 무엇인가요?",
        "최근 배운 새로운 지식이나 기술은 무엇인가요?",
        "나의 일상에서 감사함을 느끼는 순간은 언제인가요?",
        "나의 꿈과 그 꿈을 이루기 위해 할 일은 무엇인가요?",
        "내가 가장 존경하는 인물은 누구이며 그 이유는 무엇인가요?",
        "내 삶에서 가장 소중한 것은 무엇인가요?",
        "지금 하고 있는 일이 나에게 어떤 의미가 있는지 생각해보세요.",
        "어릴 적 꿈과 지금의 꿈이 어떻게 달라졌나요?",
        "나에게 힘을 주는 말이나 인용구는 무엇인가요?",
        "오늘 나를 웃게 만든 것은 무엇인가요?",
        "내가 최근에 겪은 변화 중 긍정적인 것은 무엇인가요?",
        "내 삶에서 제거하고 싶은 부정적인 요소는 무엇인가요?",
        "나의 이상적인 하루는 어떤 모습인가요?",
        "나에게 영감을 주는 것은 무엇인가요?",
        "최근 나를 힘들게 한 것과 그것을 극복하는 방법은?",
        "내 삶에서 가장 중요하게 생각하는 가치는 무엇인가요?",
        "나의 최근 성취 중 가장 자랑스러운 것은 무엇인가요?",
        "나만의 휴식 방법은 무엇인가요?",
        "내가 느끼는 행복의 정의는 무엇인가요?",
        "내 삶에 있어서 가장 중요한 우선순위는 무엇인가요?",
        "내가 최근에 경험한 새로운 것은 무엇인가요?",
        "나의 삶을 한마디로 표현한다면 어떤 말이 될까요?",
        "이번 달 동안 나의 가장 큰 변화나 깨달음은 무엇이었나요?",
        "오늘 나에게 특별했던 순간은 무엇이었나요?",
        "내가 최근에 배운 교훈은 무엇인가요?",
        "나에게 힘을 주는 사람은 누구이며, 그 이유는 무엇인가요?",
        "오늘 나를 행복하게 한 작은 일은 무엇이었나요?",
        "내 삶에서 가장 중요한 관계는 무엇이며, 왜 그런가요?",
        "오늘 나를 웃게 만든 일은 무엇이었나요?",
        "최근 내가 깨달은 새로운 진실은 무엇인가요?",
        "나의 이상적인 휴식 방법은 무엇인가요?",
        "내가 자랑스럽게 생각하는 나의 성취는 무엇인가요?",
        "나의 삶에서 제거하고 싶은 스트레스 요인은 무엇인가요?",
        "내가 가장 좋아하는 취미는 무엇이며, 그 이유는 무엇인가요?",
        "나에게 가장 영감을 주는 사람이나 사건은 무엇인가요?",
        "오늘 나의 기분을 가장 잘 표현하는 말은 무엇인가요?",
        "나에게 사랑이란 무엇인가요? (발렌타인 데이 특별 주제)",
        "내 삶에서 최근 변화된 점은 무엇인가요?",
        "내가 최근에 도전한 새로운 것은 무엇인가요?",
        "나의 일상에서 가장 소중하게 생각하는 순간은 언제인가요?",
        "나에게 평온함을 주는 것은 무엇인가요?",
        "내가 존경하는 인물은 누구이며, 그 이유는 무엇인가요?",
        "나의 최근 꿈 중 기억에 남는 것은 무엇인가요?",
        "내가 최근에 느낀 감정적인 변화는 무엇인가요?",
        "나의 삶에서 가장 기억에 남는 순간은 언제였나요?",
        "나에게 중요한 가치관은 무엇이며, 왜 그런가요?",
        "내가 자주 가는 장소와 그곳이 주는 의미는 무엇인가요?",
        "내가 최근에 읽은 책이나 본 영화 중 인상 깊었던 것은?",
        "나의 건강을 유지하기 위해 하는 일은 무엇인가요?",
        "나의 삶에서 최근에 이룬 작은 성공은 무엇인가요?",
        "이번 달을 돌아보며 내가 배운 것은 무엇인가요?",
        "새로운 달의 시작을 어떻게 맞이했나요? 이번 달의 목표는 무엇인가요?",
        "오늘 나에게 긍정적인 영향을 준 사람이나 사건은 무엇인가요?",
        "나의 삶에서 가장 중요한 가치는 무엇이며, 그 이유는 무엇인가요?",
        "오늘 나를 행복하게 한 작은 일은 무엇이었나요?",
        "나에게 영감을 주는 책이나 영화는 무엇이며, 그 이유는 무엇인가요?",
        "내 삶에서 최근에 일어난 변화 중 긍정적인 것은 무엇인가요?",
        "나의 일상에서 가장 소중한 순간은 언제인가요?",
        "나에게 가장 중요한 여성 인물은 누구이며, 그 이유는 무엇인가요? (세계 여성의 날)",
        "내가 최근에 겪은 도전과 그것을 극복한 방법은 무엇인가요?",
        "나에게 평안함을 주는 활동이나 장소는 무엇인가요?",
        "나의 이상적인 주말은 어떤 모습인가요?",
        "내가 최근에 읽은 책 중 가장 인상 깊었던 것은 무엇인가요?",
        "내 삶에서 최근 느낀 가장 강한 감정은 무엇이었나요?",
        "나에게 사랑이란 어떤 의미인가요? (화이트 데이 특별 주제)",
        "나의 건강을 위해 실천하고 있는 것은 무엇인가요?",
        "오늘 나를 웃게 만든 일은 무엇이었나요?",
        "나의 삶에서 제거하고 싶은 부정적인 요소는 무엇인가요?",
        "내가 가장 좋아하는 계절은 무엇이며, 그 이유는 무엇인가요?",
        "나의 가장 큰 꿈은 무엇이며, 그것을 이루기 위해 무엇을 하고 있나요?",
        "나의 삶에서 최근에 일어난 중요한 변화는 무엇인가요?",
        "나를 행복하게 만드는 소소한 일상의 순간들은 무엇인가요?",
        "내가 존경하는 인물은 누구이며, 그 이유는 무엇인가요?",
        "내 삶에서 가장 소중하게 생각하는 것은 무엇인가요?",
        "나의 일상에서 가장 중요하게 여기는 활동은 무엇인가요?",
        "나에게 영감을 주는 사람이나 사건은 무엇인가요?",
        "내가 최근에 배운 새로운 지식이나 기술은 무엇인가요?",
        "오늘 나의 기분을 가장 잘 표현하는 말은 무엇인가요?",
        "나의 삶에서 가장 기억에 남는 여행은 어디였나요?",
        "나에게 중요한 가치관이나 신념은 무엇인가요?",
        "내 삶에서 가장 소중한 우정은 무엇인가요?",
        "이번 달을 돌아보며 내가 배운 것은 무엇인가요?",
        "오늘 나를 웃게 만든 일은 무엇이었나요? (만우절 특별 주제)",
        "나의 삶에서 가장 중요한 관계는 무엇이며, 그 이유는 무엇인가요?",
        "최근 내가 경험한 큰 변화는 무엇이며, 그것이 나에게 미친 영향은?",
        "나의 삶에서 가장 중요하게 생각하는 가치는 무엇인가요?",
        "나에게 행복을 주는 소소한 일상의 순간들은 무엇인가요?",
        "오늘 내가 느낀 가장 강한 감정은 무엇이었나요?",
        "나의 이상적인 휴식 방법은 무엇인가요?",
        "최근 나를 영감을 준 사람이나 사건은 무엇인가요?",
        "나의 삶에서 제거하고 싶은 부정적인 요소는 무엇인가요?",
        "내가 최근에 도전한 새로운 것은 무엇인가요?",
        "나에게 중요한 사람에게 하고 싶은 말은 무엇인가요?",
        "내가 자랑스럽게 생각하는 나의 성취는 무엇인가요?",
        "내 삶에서 최근에 일어난 중요한 변화는 무엇인가요?",
        "나의 삶에서 가장 소중한 우정은 무엇인가요?",
        "나에게 평온함을 주는 활동이나 장소는 무엇인가요?",
        "나의 가장 큰 꿈은 무엇이며, 그것을 이루기 위해 무엇을 하고 있나요?",
        "내가 가장 좋아하는 취미는 무엇이며, 그 이유는 무엇인가요?",
        "내 삶에서 가장 기억에 남는 여행은 어디였나요?",
        "나에게 영감을 주는 책이나 영화는 무엇이며, 그 이유는 무엇인가요?",
        "나의 일상에서 가장 소중하게 생각하는 순간은 언제인가요?",
        "오늘 나를 행복하게 한 작은 일은 무엇이었나요?",
        "나의 삶에서 가장 중요하게 여기는 활동은 무엇인가요?",
        "나에게 중요한 가치관이나 신념은 무엇인가요?",
        "나의 건강을 위해 실천하고 있는 것은 무엇인가요?",
        "오늘 나의 기분을 가장 잘 표현하는 말은 무엇인가요?",
        "나를 가장 잘 이해해주는 사람은 누구인가요?",
        "나에게 사랑이란 어떤 의미인가요?",
        "내 삶에서 가장 중요한 우선순위는 무엇인가요?",
        "최근 나를 힘들게 한 것과 그것을 극복하는 방법은?",
        "이번 달을 돌아보며 내가 배운 것은 무엇인가요?",
        "오늘 나의 생각과 기분을 가장 잘 표현하는 말은 무엇인가요?",
        "내 삶에서 최근에 일어난 중요한 변화는 무엇인가요?",
        "나의 삶에서 가장 중요하게 여기는 활동은 무엇인가요?",
        "나에게 행복을 주는 소소한 일상의 순간들은 무엇인가요?",
        "어린이날을 맞아 어릴 적의 나에게 전하고 싶은 메시지는 무엇인가요?",
        "내가 자랑스럽게 생각하는 나의 성취는 무엇인가요?",
        "나에게 중요한 사람에게 하고 싶은 말은 무엇인가요?",
        "내 삶에서 가장 기억에 남는 여행은 어디였나요?",
        "나의 이상적인 휴식 방법은 무엇인가요?",
        "오늘 나를 행복하게 한 작은 일은 무엇이었나요?",
        "내가 최근에 배운 새로운 지식이나 기술은 무엇인가요?",
        "나에게 영감을 주는 책이나 영화는 무엇이며, 그 이유는 무엇인가요?",
        "나의 삶에서 제거하고 싶은 부정적인 요소는 무엇인가요?",
        "나의 가장 큰 꿈은 무엇이며, 그것을 이루기 위해 무엇을 하고 있나요?",
        "오늘 나를 웃게 만든 일은 무엇이었나요?",
        "나의 일상에서 가장 소중하게 생각하는 순간은 언제인가요?",
        "나에게 평온함을 주는 활동이나 장소는 무엇인가요?",
        "나의 삶에서 가장 중요한 우정은 무엇인가요?",
        "나에게 중요한 가치관이나 신념은 무엇인가요?",
        "나를 가장 잘 이해해주는 사람은 누구인가요?",
        "나에게 사랑이란 어떤 의미인가요?",
        "내가 최근에 도전한 새로운 것은 무엇인가요?",
        "나의 삶에서 가장 중요한 관계는 무엇이며, 그 이유는 무엇인가요?",
        "최근 내가 경험한 큰 변화는 무엇이며, 그것이 나에게 미친 영향은?",
        "나의 건강을 위해 실천하고 있는 것은 무엇인가요?",
        "나에게 힘을 주는 사람이나 사건은 무엇인가요?",
        "오늘 내가 느낀 가장 강한 감정은 무엇이었나요?",
        "내 삶에서 가장 소중하게 생각하는 것은 무엇인가요?",
        "나의 삶에서 가장 중요하게 생각하는 가치는 무엇인가요?",
        "오늘 나의 생각과 기분을 가장 잘 표현하는 말은 무엇인가요?",
        "이번 달을 돌아보며 내가 배운 것은 무엇인가요?",
        "이번 달의 목표와 기대하는 바는 무엇인가요?",
        "오늘 나를 행복하게 한 작은 일은 무엇이었나요?",
        "나의 삶에서 최근에 일어난 중요한 변화는 무엇인가요?",
        "나에게 힘을 주는 말이나 인용구는 무엇인가요?",
        "나의 삶에서 가장 중요하게 여기는 활동은 무엇인가요?",
        "현충일을 맞아 나의 나라에 대해 어떻게 생각하나요?",
        "나의 건강을 위해 실천하고 있는 것은 무엇인가요?",
        "오늘 나를 웃게 만든 일은 무엇이었나요?",
        "나의 이상적인 휴식 방법은 무엇인가요?",
        "나의 삶에서 제거하고 싶은 부정적인 요소는 무엇인가요?",
        "내가 최근에 배운 새로운 지식이나 기술은 무엇인가요?",
        "나에게 영감을 주는 사람이나 사건은 무엇인가요?",
        "나의 가장 큰 꿈은 무엇이며, 그것을 이루기 위해 무엇을 하고 있나요?",
        "내가 자랑스럽게 생각하는 나의 성취는 무엇인가요?",
        "오늘 내가 느낀 가장 강한 감정은 무엇이었나요?",
        "나의 일상에서 가장 소중하게 생각하는 순간은 언제인가요?",
        "나에게 평온함을 주는 활동이나 장소는 무엇인가요?",
        "나의 삶에서 가장 중요한 우정은 무엇인가요?",
        "나에게 중요한 가치관이나 신념은 무엇인가요?",
        "나를 가장 잘 이해해주는 사람은 누구인가요?",
        "오늘 나의 기분을 가장 잘 표현하는 말은 무엇인가요?",
        "나의 삶에서 가장 기억에 남는 여행은 어디였나요?",
        "나에게 사랑이란 어떤 의미인가요?",
        "내가 최근에 도전한 새로운 것은 무엇인가요?",
        "나의 삶에서 가장 중요한 관계는 무엇이며, 그 이유는 무엇인가요?",
        "최근 내가 경험한 큰 변화는 무엇이며, 그것이 나에게 미친 영향은?",
        "나에게 행복을 주는 소소한 일상의 순간들은 무엇인가요?",
        "내 삶에서 가장 소중하게 생각하는 것은 무엇인가요?",
        "나의 삶에서 가장 중요하게 생각하는 가치는 무엇인가요?",
        "이번 달을 돌아보며 내가 배운 것은 무엇인가요?",
        "올해의 절반을 돌아보며, 지금까지 가장 큰 성취는 무엇이었나요?",
        "오늘 하루에서 가장 기억에 남는 순간은 무엇이었나요?",
        "최근에 읽은 책이나 본 영화에서 어떤 교훈을 얻었나요?",
        "나를 행복하게 하는 소소한 일상의 즐거움은 무엇인가요?",
        "최근에 겪은 도전이나 어려움은 무엇이었고, 그것을 어떻게 극복했나요?",
        "나의 건강을 위해 어떤 노력을 하고 있나요?",
        "가장 최근에 시도해본 새로운 것은 무엇이었나요?",
        "지금 나의 삶에서 가장 중요하게 생각하는 가치는 무엇인가요?",
        "가까운 미래에 이루고 싶은 작은 목표는 무엇인가요?",
        "내 삶에서 중요한 사람에게 최근에 전달한 감사의 메시지는 무엇인가요?",
        "오늘 나를 웃게 만든 것은 무엇인가요?",
        "나의 일상에서 창의성을 발휘하는 방법은 무엇인가요?",
        "나에게 영감을 주는 인물은 누구인가요, 그리고 왜 그런가요?",
        "최근에 내가 한 친절한 행동은 무엇이었나요?",
        "어떤 습관을 개선하고 싶나요?",
        "내가 존경하는 사람의 어떤 특징이나 행동을 본받고 싶나요?",
        "최근에 경험한 아름다운 순간은 무엇이었나요?",
        "나에게 의미 있는 성공이란 무엇인가요?",
        "내 삶에서 어떤 것에 더 많은 시간을 할애하고 싶나요?",
        "오늘 나에게 에너지를 준 것은 무엇인가요?",
        "나의 삶에서 중요하다고 생각하는 관계를 어떻게 관리하고 있나요?",
        "나의 일상에서 가장 좋아하는 시간은 언제인가요?",
        "내가 가진 두려움 중 하나를 극복하기 위해 무엇을 할 수 있을까요?",
        "최근에 느낀 성취감은 어떤 것이었나요?",
        "내가 가장 자랑스러워하는 개인적 특징은 무엇인가요?",
        "내가 최근에 배운 새로운 지식이나 기술은 무엇인가요?",
        "지금 내 삶에서 변화시키고 싶은 것은 무엇인가요?",
        "어떤 상황에서 내가 가장 편안함을 느끼나요?",
        "내가 다른 사람들에게 주는 영향에 대해 어떻게 생각하나요?",
        "나의 일상 속 작은 성공들은 무엇인가요?",
        "이번 달을 되돌아보며, 내 인생의 어떤 측면이 가장 많이 변화했나요?",
        "이번 여름에 가장 즐거웠던 순간은 무엇이었나요?",
        "오늘 나를 미소 짓게 만든 것은 무엇인가요?",
        "나에게 평온함을 주는 활동이나 장소는 어디인가요?",
        "나의 인생에서 현재 가장 중요한 것은 무엇인가요?",
        "최근에 내가 한 결정 중 가장 만족스러운 것은 무엇인가요?",
        "내가 자주 가는 장소 중 어디가 나에게 특별한 의미를 가지나요?",
        "가장 최근에 느낀 성장의 순간은 언제였나요?",
        "나를 가장 잘 표현하는 색깔은 무엇이라고 생각하나요?",
        "나의 삶에서 최근 변화한 점은 무엇인가요?",
        "오늘 하루를 한 단어로 표현한다면 무엇이 될까요?",
        "나의 삶에서 고마워하는 사람은 누구이고, 왜 그런가요?",
        "나의 일상에서 가장 즐기는 루틴은 무엇인가요?",
        "오늘 나를 가장 당혹스럽게 만든 순간은 무엇이었나요?",
        "내가 타인에게 줄 수 있는 가장 좋은 조언은 무엇인가요?",
        "나에게 힘을 주는 인용구나 문구는 무엇인가요?",
        "오늘 나의 감정을 지배한 것은 무엇이었나요?",
        "나는 어떤 상황에서 가장 창의적이라고 느끼나요?",
        "내 삶에서 지금 당장 바꾸고 싶은 것은 무엇인가요?",
        "가장 최근에 내 마음을 움직인 사람은 누구였나요?",
        "나의 삶에서 현재 가장 큰 도전은 무엇인가요?",
        "내가 다른 사람들에게 어떤 영향을 미치고 싶나요?",
        "내가 삶에서 가장 감사하는 것은 무엇인가요?",
        "오늘 나에게 의미 있었던 대화는 무엇이었나요?",
        "나의 삶에서 일관되게 유지하고 싶은 가치는 무엇인가요?",
        "나는 어떻게 하면 내일을 더 생산적으로 보낼 수 있을까요?",
        "내가 최근에 배운 가장 중요한 교훈은 무엇인가요?",
        "내가 자랑스럽게 생각하는 최근의 성취는 무엇인가요?",
        "내가 다른 사람들과 공유하고 싶은 지식이나 경험은 무엇인가요?",
        "오늘 나를 가장 행복하게 만든 순간은 무엇이었나요?",
        "내가 최근에 깨달은 자기 자신에 대한 사실은 무엇인가요?",
        "이번 달을 돌아보며, 내가 배운 가장 중요한 교훈은 무엇인가요?",
        "새로운 달이 시작됐어요. 이번 달에 달성하고 싶은 목표는 무엇인가요?",
        "오늘 나에게 힘을 준 것은 무엇이었나요?",
        "나의 삶에서 현재 가장 큰 도전은 무엇이며, 이에 대한 나의 계획은 무엇인가요?",
        "나를 웃게 만든 오늘의 순간은 무엇이었나요?",
        "내가 가장 최근에 배운 새로운 것은 무엇이었나요?",
        "오늘 나를 가장 자랑스럽게 만든 행동은 무엇이었나요?",
        "나에게 중요한 사람과의 관계를 어떻게 더 강화할 수 있을까요?",
        "내가 최근에 깨달은 것 중 가장 의미 있는 교훈은 무엇인가요?",
        "나에게 영감을 주는 것은 무엇이며, 그 이유는 무엇인가요?",
        "나의 일상에서 더 많은 시간을 할애하고 싶은 활동은 무엇인가요?",
        "오늘 나에게 도전이 되었던 것은 무엇이었나요?",
        "나의 삶에서 최근 변화한 것은 무엇인가요?",
        "나에게 휴식과 재충전을 제공하는 것은 무엇인가요?",
        "나는 어떤 상황에서 가장 편안함을 느끼나요?",
        "내 삶에서 중요하게 생각하는 가치는 무엇이고, 그 이유는 무엇인가요?",
        "나의 일상에서 가장 만족스러운 순간은 언제인가요?",
        "나의 인생에서 중요한 사람들에게 어떤 영향을 미치고 싶나요?",
        "나에게 자신감을 주는 것은 무엇인가요?",
        "오늘 나를 가장 생각하게 만든 순간은 무엇이었나요?",
        "나는 어떤 상황에서 가장 창의적이라고 느끼나요?",
        "나의 삶에서 최근 느낀 성취는 무엇인가요?",
        "나에게 가장 큰 영향을 준 책이나 영화는 무엇이었나요?",
        "나는 오늘 어떻게 다른 사람을 도왔나요?",
        "나의 삶에서 지금 가장 중요한 것은 무엇인가요?",
        "나는 어떤 방식으로 나 자신을 더 잘 돌볼 수 있을까요?",
        "오늘 나에게 가장 큰 도전이었던 것은 무엇이었나요?",
        "내가 자주 가는 장소 중 어디가 나에게 특별한 의미를 가지나요?",
        "내가 존경하는 사람의 어떤 특징이나 행동을 본받고 싶나요?",
        "오늘 나에게 에너지를 준 것은 무엇인가요?",
        "이번 달을 돌아보며, 내 삶에서 가장 많이 변화한 것은 무엇인가요?",
        "이번 달에 달성하고 싶은 개인적인 목표는 무엇인가요?",
        "가을의 변화 중 내 마음을 움직이는 것은 무엇인가요?",
        "오늘 나를 가장 웃게 만든 일은 무엇이었나요?",
        "최근에 내가 한 결정 중 가장 만족스러운 것은 무엇인가요?",
        "내 삶에서 지금 가장 중요한 것은 무엇이라고 생각하나요?",
        "나에게 힘을 주는 사람이나 활동은 무엇인가요?",
        "오늘 나의 감정을 가장 잘 표현하는 단어는 무엇인가요?",
        "나의 일상 속에서 가장 감사하는 순간은 언제인가요?",
        "나의 삶에서 최근 변화한 점은 무엇인가요?",
        "오늘 나를 가장 생각하게 만든 사건은 무엇이었나요?",
        "내가 자주 가는 장소 중 어디가 나에게 특별한 의미를 가지나요?",
        "나에게 에너지를 주는 것은 무엇인가요?",
        "나는 어떤 상황에서 가장 편안함을 느끼나요?",
        "나의 인생에서 중요한 사람들에게 어떤 영향을 미치고 싶나요?",
        "나에게 영감을 주는 인용구나 문구는 무엇인가요?",
        "내 삶에서 현재 가장 큰 도전은 무엇인가요?",
        "나의 일상에서 가장 만족스러운 순간은 언제인가요?",
        "내가 타인에게 줄 수 있는 가장 좋은 조언은 무엇인가요?",
        "나에게 자신감을 주는 것은 무엇인가요?",
        "나는 어떤 상황에서 가장 창의적이라고 느끼나요?",
        "오늘 나에게 도전이 되었던 것은 무엇이었나요?",
        "나의 삶에서 최근 느낀 성취는 무엇인가요?",
        "나에게 가장 큰 영향을 준 책이나 영화는 무엇이었나요?",
        "나는 오늘 어떻게 다른 사람을 도왔나요?",
        "나의 삶에서 지금 가장 중요한 것은 무엇인가요?",
        "나는 어떤 방식으로 나 자신을 더 잘 돌볼 수 있을까요?",
        "오늘 나에게 가장 큰 도전이었던 것은 무엇이었나요?",
        "내가 자주 가는 장소 중 어디가 나에게 특별한 의미를 가지나요?",
        "내가 존경하는 사람의 어떤 특징이나 행동을 본받고 싶나요?",
        "오늘 나에게 에너지를 준 것은 무엇인가요?",
        "이번 달을 돌아보며, 내 삶에서 가장 많이 변화한 것은 무엇인가요?",
        "이번 달에 달성하고 싶은 개인적인 목표는 무엇인가요?",
        "나의 삶에서 최근 감사했던 순간은 언제였나요?",
        "오늘 나를 웃게 만든 일은 무엇이었나요?",
        "최근에 내가 한 결정 중 가장 만족스러운 것은 무엇인가요?",
        "나에게 힘을 주는 사람이나 활동은 무엇인가요?",
        "오늘 나의 감정을 가장 잘 표현하는 단어는 무엇인가요?",
        "나의 일상 속에서 가장 감사하는 순간은 언제인가요?",
        "나의 삶에서 최근 변화한 점은 무엇인가요?",
        "오늘 나를 가장 생각하게 만든 사건은 무엇이었나요?",
        "내가 자주 가는 장소 중 어디가 나에게 특별한 의미를 가지나요?",
        "나에게 에너지를 주는 것은 무엇인가요?",
        "나는 어떤 상황에서 가장 편안함을 느끼나요?",
        "나의 인생에서 중요한 사람들에게 어떤 영향을 미치고 싶나요?",
        "나에게 영감을 주는 인용구나 문구는 무엇인가요?",
        "내 삶에서 현재 가장 큰 도전은 무엇인가요?",
        "나의 일상에서 가장 만족스러운 순간은 언제인가요?",
        "내가 타인에게 줄 수 있는 가장 좋은 조언은 무엇인가요?",
        "나에게 자신감을 주는 것은 무엇인가요?",
        "나는 어떤 상황에서 가장 창의적이라고 느끼나요?",
        "오늘 나에게 도전이 되었던 것은 무엇이었나요?",
        "나의 삶에서 최근 느낀 성취는 무엇인가요?",
        "나에게 가장 큰 영향을 준 책이나 영화는 무엇이었나요?",
        "나는 오늘 어떻게 다른 사람을 도왔나요?",
        "나의 삶에서 지금 가장 중요한 것은 무엇인가요?",
        "나는 어떤 방식으로 나 자신을 더 잘 돌볼 수 있을까요?",
        "오늘 나에게 가장 큰 도전이었던 것은 무엇이었나요?",
        "내가 자주 가는 장소 중 어디가 나에게 특별한 의미를 가지나요?",
        "내가 존경하는 사람의 어떤 특징이나 행동을 본받고 싶나요?",
        "오늘 나에게 에너지를 준 것은 무엇인가요?",
        "이번 달을 돌아보며, 내 삶에서 가장 많이 변화한 것은 무엇인가요?",
        "올해의 마지막 달이 시작됐어요. 이번 달에 달성하고 싶은 목표는 무엇인가요?",
        "겨울의 시작과 함께 나의 마음에 변화가 있나요? 어떤 감정을 느끼고 있나요?",
        "최근에 내 삶에서 일어난 가장 긍정적인 변화는 무엇인가요?",
        "오늘 나를 웃게 만든 일은 무엇이었나요?",
        "나에게 힘을 주는 사람이나 활동은 무엇인가요?",
        "내가 가장 최근에 배운 새로운 것은 무엇인가요?",
        "오늘 나의 감정을 가장 잘 표현하는 단어는 무엇인가요?",
        "나의 삶에서 최근 감사했던 순간은 언제였나요?",
        "나의 삶에서 최근 변화한 점은 무엇인가요?",
        "오늘 나를 가장 생각하게 만든 사건은 무엇이었나요?",
        "내가 자주 가는 장소 중 어디가 나에게 특별한 의미를 가지나요?",
        "나에게 에너지를 주는 것은 무엇인가요?",
        "나는 어떤 상황에서 가장 편안함을 느끼나요?",
        "나의 인생에서 중요한 사람들에게 어떤 영향을 미치고 싶나요?",
        "나에게 영감을 주는 인용구나 문구는 무엇인가요?",
        "내 삶에서 현재 가장 큰 도전은 무엇인가요?",
        "나의 일상에서 가장 만족스러운 순간은 언제인가요?",
        "내가 타인에게 줄 수 있는 가장 좋은 조언은 무엇인가요?",
        "나에게 자신감을 주는 것은 무엇인가요?",
        "나는 어떤 상황에서 가장 창의적이라고 느끼나요?",
        "오늘 나에게 도전이 되었던 것은 무엇이었나요?",
        "나의 삶에서 최근 느낀 성취는 무엇인가요?",
        "나에게 가장 큰 영향을 준 책이나 영화는 무엇이었나요?",
        "나는 오늘 어떻게 다른 사람을 도왔나요?",
        "크리스마스입니다. 오늘 나에게 특별한 의미가 있는 순간은 무엇이었나요?",
        "나는 어떤 방식으로 나 자신을 더 잘 돌볼 수 있을까요?",
        "오늘 나에게 가장 큰 도전이었던 것은 무엇이었나요?",
        "내가 자주 가는 장소 중 어디가 나에게 특별한 의미를 가지나요?",
        "내가 존경하는 사람의 어떤 특징이나 행동을 본받고 싶나요?",
        "오늘 나에게 에너지를 준 것은 무엇인가요?",
        "올해를 돌아보며, 내 삶에서 가장 많이 변화한 것은 무엇인가요?"
        ];

    const generalQuestions = [
        "내 생애에서 가장 중요한 가치는 무엇인가요?",
        "가족은 나에게 어떤 의미인가요?",
        "우정과 친구 관계가 나에게 어떤 역할을 하는 것 같아요?",
        "돈과 재산은 나에게 어떤 의미를 갖나요?",
        "성공과 성취가 나에게 어떤 중요성을 갖나요?",
        "인간관계에서 나의 역할은 무엇인가요?",
        "나는 어떤 가치를 추구하고 있나요?",
        "나의 신념과 철학은 무엇인가요?",
        "나에게 가장 중요한 것은 행복인가요?",
        "인내와 인내심을 갖는 것은 나에게 어떤 의미인가요?",
        "공평성과 정의에 대한 나의 생각은 어떤가요?",
        "자발성과 책임감을 가지는 것이 왜 중요한가요?",
        "내가 속한 사회나 커뮤니티에 어떤 기여를 하고 싶나요?",
        "환경 보호와 지속 가능성은 나에게 어떤 의미인가요?",
        "미래에 대한 나의 목표와 꿈은 무엇인가요?",
        "미래를 위한 계획을 세우는 것이 왜 중요한가요?",
        "나의 가치관은 가족이나 문화적 배경과 어떻게 연결되나요?",
        "나의 가치관은 시대나 사회적 환경에 어떻게 영향을 받나요?",
        "과거에 내린 결정과 그 결정이 나의 가치관에 미치는 영향은 무엇인가요?",
        "나는 어떤 가치를 가진 사람들과 시간을 보내는 것을 선호하나요?",
        "어떤 상황에서 나의 가치관이 충돌하거나 변화되었나요?",
        "어떤 경험들이 나의 가치관에 영향을 주었나요?",
        "나의 가치관이 사회적 문제나 윤리적 고민에 어떤 영향을 미치나요?",
        "나는 어떤 일을 통해 내 가치관을 실천하고 있나요?",
        "나는 무엇을 위해 희생할 수 있는 가치를 가지고 있나요?",
        "어떤 가치를 중요하게 생각하지만 현재 실천하지 못하고 있나요?",
        "나의 가치관은 나의 인생 방향을 어떻게 결정하나요?",
        "가치관을 바탕으로 한 나의 목표와 계획은 무엇인가요?",
        "내가 가지고 있는 가치관이 내 행동과 어떻게 연결되나요?",
        "나의 가치관은 나의 인간관계에 어떤 영향을 미치나요?",
        "나의 가치관은 나의 직업 선택에 어떤 영향을 미치나요?",
        "가치관이 다른 사람과의 갈등을 어떻게 다루나요?",
        "나의 가치관은 내 자아이미지에 어떤 영향을 미치나요?",
        "나는 어떻게 나의 가치관을 표현하고 있나요?",
        "다른 사람들의 가치관을 존중하고 수용하는 것에 대해 어떻게 생각하나요?",
        "나의 가치관이 변화하는 것에 대해 어떻게 대처하나요?",
        "나의 가치관과 나의 행복 간에 어떤 관계가 있나요?",
        "가치관의 변화가 나의 삶에 긍정적인 영향을 주었나요?",
        "가치관의 변화가 나의 삶에 부정적인 영향을 주었나요?",
        "나는 어떻게 내 가치관을 더 강화하고 발전시킬 수 있을까요?",
        "다른 사람들과의 대화나 의견 충돌을 통해 가치관을 더 깊게 이해하고 있나요?",
        "나의 가치관이 내게 주는 자아 존중과 자신감은 어떤가요?",
        "나의 가치관은 나의 감정과 감정표현에 어떤 영향을 미치나요?",
        "나의 가치관이 나의 건강과 웰빙에 어떤 영향을 미치나요?",
        "가치관과 문화적 다양성 사이의 관계에 대해 어떻게 생각하나요?",
        "내가 가진 가치관을 다른 사람들에게 어떻게 전파하고 싶나요?",
        "나의 가치관은 나의 미래 계획과 어떤 연관성이 있나요?",
        "가치관을 바탕으로 한 행동이 내 인생에 어떤 영향을 미치는지 예시를 들어 설명해보세요.",
        "가치관에 관한 어떤 책, 인용구 또는 영향력을 주는 인물이 있나요?",
        "나의 가치관을 나만의 문장으로 정의해보세요.",
        "오늘 아침에 무엇을 먹었나요?",
        "오늘의 일정은 어떻게 되나요?",
        "오늘은 어떤 날씨인가요?",
        "어제 밤에 무슨 꿈을 꾸었나요?",
        "오늘 아침에 일어난 시간은 언제인가요?",
        "어떤 음악을 듣고 있나요?",
        "오늘의 감정은 어떤가요?",
        "오늘의 하루 계획은 어떻게 되었나요?",
        "어떤 책을 읽고 있나요?",
        "오늘의 운동 루틴은 어떻게 되나요?",
        "가족과의 저녁 식사는 무엇을 먹었나요?",
        "오늘의 작은 기쁨은 무엇인가요?",
        "어떤 문제나 고민이 있나요?",
        "오늘의 일상적인 활동 중 가장 즐거웠던 것은 무엇인가요?",
        "오늘은 어떤 사람들을 만났나요?",
        "주말 계획은 어떻게 되나요?",
        "오늘의 일상에서 가장 큰 도전은 무엇이었나요?",
        "어떤 새로운 것을 배우고 싶나요?",
        "오늘의 일상에서 가장 놀랐던 순간은 무엇인가요?",
        "오늘은 어떤 사건이나 뉴스를 접했나요?",
        "오늘의 일상에서 가장 감사한 순간은 무엇인가요?",
        "주간 목표 중 어떤 것을 달성하셨나요?",
        "오늘은 무엇을 배우거나 습득하려고 노력했나요?",
        "주변 환경에 어떤 변화가 있었나요?",
        "오늘은 어떤 예상치 못한 일이 있었나요?",
        "일상 생활에서 주로 어떤 습관을 가지고 있나요?",
        "오늘은 어떤 업무나 공부를 했나요?",
        "가족 또는 친구와 함께 한 가장 특별한 순간은 무엇인가요?",
        "오늘은 어떤 사회적 상황에 대해 생각해보았나요?",
        "일상 생활에서 가장 자주 하는 취미는 무엇인가요?",
        "오늘은 어떤 예정된 계획이 변경되었나요?",
        "어떤 명상이나 휴식 시간을 가졌나요?",
        "오늘은 어떤 문제를 해결하려고 노력했나요?",
        "어떤 새로운 아이디어나 창의적인 생각을 하셨나요?",
        "일상에서 가장 힘들었던 순간은 무엇인가요?",
        "오늘은 어떤 독서나 영상 콘텐츠를 소비했나요?",
        "주변 사람들과 함께 한 대화 중 인상적인 내용은 무엇인가요?",
        "오늘은 어떤 환경에 있었나요?",
        "일상에서 무엇을 개선하고 싶다고 생각하셨나요?",
        "오늘의 일상에서 가장 큰 성취는 무엇인가요?",
        "어떤 음식을 먹으면 기분이 좋아지나요?",
        "오늘은 어떤 목표를 달성하기 위해 노력했나요?",
        "일상 생활에서 가장 편안한 장소는 어디인가요?",
        "오늘의 일상에서 어떤 도움을 주거나 받았나요?",
        "일상에서 자주 하는 자기 관리 활동은 무엇인가요?",
        "오늘은 어떤 새로운 사람을 만나거나 인터랙션을 가졌나요?",
        "일상에서 자주 생각하는 가치나 원칙은 무엇인가요?",
        "오늘은 어떤 일을 통해 성장하려고 노력했나요?",
        "일상에서 자주 하는 스트레스 해소 방법은 무엇인가요?",
        "오늘의 일상에서 가장 큰 후회는 무엇인가요?",
        "당신은 평소 어떤 성격을 가지고 있다고 생각하시나요?",
        "어떤 상황에서 가장 행복하고 즐겁다고 느끼나요?",
        "어떤 상황에서 가장 스트레스를 받는다고 느끼나요?",
        "어떤 상황에서 가장 침착하고 냉정하게 대처하는 편인가요?",
        "당신의 친구들이나 가족은 당신을 어떻게 설명하나요?",
        "어떤 종류의 사람들과 어울리는 것을 좋아하나요?",
        "어떤 종류의 사람들과 어울리기 어려워하나요?",
        "변화에 대한 대처 능력이 어떤가요?",
        "어떤 일을 하면 가장 자신감을 느끼나요?",
        "당신의 감정 표현 스타일은 어떤가요?",
        "어떤 상황에서 웃음을 자주 지으세요?",
        "무엇에 대해 가장 열정적이거나 흥미를 느끼나요?",
        "어떤 상황에서 주도적으로 나서는 편인가요?",
        "고집 성향이 있나요? 그렇다면 어떤 상황에서 나타나나요?",
        "당신은 통제가 필요한 편인가요, 아니면 흐름대로 가는 편인가요?",
        "어떤 유형의 일에 가장 집중력을 발휘하나요?",
        "새로운 경험을 받아들이는 데 얼마나 개방적인가요?",
        "어떤 상황에서 어떤 유형의 결정을 내리기 어렵다고 느끼나요?",
        "당신의 관용적인 언어나 의사소통 스타일은 어떤가요?",
        "고민이나 문제 상황을 어떻게 해결하려고 하나요?",
        "어떤 상황에서 가장 인내심을 발휘하려고 노력하나요?",
        "당신은 어떤 유형의 관계를 선호하나요, 밀접한 친구 관계인가요, 아니면 넓은 사회적 관계인가요?",
        "어떤 일을 할 때 어떤 유형의 동기부여가 필요하나요?",
        "당신의 성격에서 가장 큰 장점은 무엇이라고 생각하나요?",
        "당신의 성격에서 가장 발전이 필요하다고 느끼는 부분은 무엇인가요?",
        "어떤 유형의 업무나 활동을 가장 선호하나요?",
        "어떤 상황에서 예민하거나 과민하게 반응하는 편인가요?",
        "당신은 어떤 유형의 휴식이나 스트레스 해소 방법을 선호하나요?",
        "어떤 상황에서 가장 창의적인 아이디어가 떠오르나요?",
        "당신은 주변 사람들과 어떻게 대화하거나 대처하는 편인가요?",
        "어떤 상황에서 가장 인정받고 싶다고 느끼나요?",
        "어떤 유형의 사회적 역할을 선호하나요?",
        "어떤 일을 하면 가장 능률적으로 처리하는 편인가요?",
        "어떤 상황에서 가장 자신을 표현하고 싶다고 느끼나요?",
        "어떤 유형의 사람들과 가장 피하려고 하나요?",
        "어떤 유형의 관심사를 가지고 있나요?",
        "어떤 상황에서 가장 신중하고 조심성 있는 결정을 내리는 편인가요?",
        "당신의 성격에서 가장 중요하게 생각하는 가치나 원칙은 무엇인가요?",
        "어떤 상황에서 당신의 인내심을 시험받게 만드는 요소는 무엇인가요?",
        "당신은 어떤 유형의 사람들과 가장 긴밀한 관계를 형성하는 편인가요?",
        "어떤 유형의 환경에서 가장 편안하게 느끼나요?",
        "어떤 유형의 업무나 과제를 가장 선호하나요?",
        "어떤 상황에서 가장 자주 감정적으로 반응하나요?",
        "당신은 어떤 유형의 목표를 가지고 있나요, 짧은 기간의 목표인가요, 아니면 장기적인 목표인가요?",
        "어떤 상황에서 가장 부끄러움을 느끼나요?",
        "당신은 어떤 유형의 문제 해결 방식을 선호하나요?",
        "어떤 상황에서 가장 열정적으로 행동하나요?",
        "당신은 어떤 유형의 업무 환경에서 가장 효율적으로 일하는 편인가요?",
        "어떤 상황에서 당신의 자신감을 키우려고 노력하나요?",
        "당신의 성격에서 가장 높게 평가받는 특징은 무엇이라고 생각하나요?",
        "촉망받는 언론의 자유와 민주주의 사이에서 어떤 균형을 유지해야 할까요?",
        "대마초와 같은 마약의 합법화에 찬성하나요, 반대하나요?",
        "총기 소유와 사용에 대한 규제를 강화해야 한다고 생각하시나요?",
        "동성 결혼을 합법화해야 한다고 생각하시나요?",
        "난민들을 환영하고 수용해야 한다고 생각하시나요, 아니면 경계를 더 높여야 한다고 생각하시나요?",
        "경제 발전을 위해 환경보호 정책을 어느 정도 희생해야 할까요?",
        "부의 분배를 위해 더 높은 세금을 부과해야 한다고 생각하시나요?",
        "학교에서 성교육을 강화해야 한다고 생각하시나요?",
        "인공지능과 로봇에 대한 규제를 강화해야 할까요?",
        "사형제도를 지지하나요, 아니면 폐지해야 한다고 생각하나요?",
        "어떤 종류의 군사 행동이 정당한 방어일까요, 아니면 침공일까요?",
        "장기간의 군사 감시와 스파이 활동은 어떤 상황에서 정당화될 수 있을까요?",
        "어린 아이들에게 스마트폰이나 태블릿을 사용하는 것을 허용해야 할까요, 아니면 제한해야 할까요?",
        "적절한 성인용 콘텐츠의 접근성을 유지하면서 아동에 대한 성착취물을 방지하는 방법은 무엇인가요?",
        "공공 장소에서의 금연을 의무화해야 할까요?",
        "가난한 국가에 개발 지원을 제공하는 것이 중요한가요, 아니면 국내 문제에 더 집중해야 할까요?",
        "형사 재판에서 사형 판결을 내리는 것이 적절한가요, 아니면 무기한 감옥 생활을 선택해야 할까요?",
        "어린이들에게 혼성 화장실 사용을 허용해야 할까요, 아니면 성별에 따라 분리해야 할까요?",
        "어느 정도까지 인간 유전자 조작이 허용되어야 할까요?",
        "낙태는 어떤 경우에 허용되어야 할까요?",
        "사회적 불평등을 해결하기 위해 어떤 형태의 양극화 공격적 조치가 필요한가요?",
        "국제 무역에서 보호무역주의적 정책을 채택해야 할까요, 아니면 자유무역을 지지해야 할까요?",
        "병원에서의 안락사는 합법화해야 할까요, 아니면 금지해야 할까요?",
        "인공지능 기술을 사용한 자율주행 자동차의 안전 문제는 어떻게 해결해야 할까요?",
        "공공장소에서 종교적 상징물을 착용하거나 노출하는 것은 허용되어야 할까요?",
        "금융 시스템의 규제를 더 강화해야 할까요, 아니면 자율적인 시장 원칙을 존중해야 할까요?",
        "인공지능과 로봇이 일자리를 대체하면 어떻게 대응해야 할까요?",
        "어떤 사회적 그룹이 추가 지원을 받아야 할까요?",
        "인간의 생명과 환경을 위협하는 기술 또는 연구를 어떻게 규제해야 할까요?",
        "사회에서의 다양성을 증진하기 위해 어떤 조치를 취해야 할까요?",
        "어떤 종류의 예술 작품이나 문화 콘텐츠는 허용되지 않아야 할까요?",
        "스포츠 경기에서 성공을 위해 어떤 수단이 허용되어야 할까요?",
        "인간의 생명을 구하기 위해 수용 가능한 수준의 인공기관 이식이 가능해야 할까요?",
        "어떤 종류의 정보가 인터넷에서 자유롭게 액세스 가능해야 할까요?",
        "소수자 권리를 보호하기 위해 어떤 조치를 취해야 할까요?",
        "동물 실험은 과학적 연구의 일환으로 인정되어야 할까요?",
        "투표 권리를 어떤 조건에 따라 제한해야 할까요?",
        "어린이들에게 성교육을 강조하는 것은 어떤 식으로 이루어져야 할까요?",
        "사형 형벌이 사회에 어떤 영향을 미치는지 어떻게 생각하십니까?",
        "어떤 경우에 병원에서의 안락사를 허용해야 할까요?",
        "어떤 종류의 군사 행동이 정당한 방어로 인정되어야 할까요?",
        "유전자 편집 기술을 인간 유전자에 사용하는 것이 허용되어야 할까요?",
        "인공지능에 의한 자율주행 자동차 사고의 법적 책임은 누가 져야 할까요?",
        "종교적 신념에 따라 어떤 특권이나 예외를 허용해야 할까요?",
        "금융 시스템에서의 규제 강화가 경제에 어떤 영향을 미칠까요?",
        "인간의 생명과 환경을 위협하는 기술 연구는 어떻게 통제되어야 할까요?",
        "자율주행 자동차의 안전 문제를 어떻게 해결해야 할까요?",
        "스포츠 경기에서 도합한 경쟁을 위해 허용되어야 할까요?",
        "소수자의 권리와 양성 평등을 증진하기 위한 법적 조치는 필요한가요?",
        "자동무기나 로봇군의 개발 및 사용에 대한 규제는 어떻게 이루어져야 할까요?",
        "만약 타임머신이 있다면 어느 시대로 가보고 싶으신가요?",
        "세계 여행을 할 수 있는 능력을 부여받았다면, 어느 나라로 먼저 갈 건가요?",
        "여러분의 꿈 직업은 무엇인가요?",
        "만약 오늘 하루 동안 어떤 동물이나 색깔의 머리카락을 가지게 된다면, 무슨 동물이나 머리카락을 원하시나요?",
        "만약 하루 동안 어떤 슈퍼파워를 가질 수 있다면 어떤 슈퍼파워를 가지고 싶으신가요?",
        "가장 좋아하는 음식 중 하나만 먹을 수 있다면, 무엇을 선택하시겠어요?",
        "만약 세계적으로 유명한 스포츠 스타와 저녁 식사를 할 수 있는 기회가 주어진다면, 누구와 함께 식사하고 싶으세요?",
        "만약 당신의 공간에만 적용되는 법을 만들 수 있다면, 어떤 법을 만들어 보고 싶으세요?",
        "최근에 본 가장 재미있는 영화나 TV 프로그램은 무엇이었나요?",
        "만약 여러분의 강력한 단어가 마법을 부를 수 있다면, 무슨 일을 할 건가요?",
        "가장 기억에 남는 어릴 적 여름 방학 활동은 무엇이었나요?",
        "만약 하루 동안 어떤 유명인의 삶을 살아볼 수 있다면, 누구의 삶을 선택하겠어요?",
        "가장 재미있는 꿈을 최근에 꾸었나요? 어떤 꿈이었나요?",
        "만약 하늘에서 별을 하나 만들 수 있다면, 어떤 모양의 별을 만들어 보고 싶으세요?",
        "만약 오늘 하루만 무한한 예산을 가진 쇼핑 투어를 할 수 있다면, 어떤 물건을 사고 싶으세요?",
        "당신의 가장 좋아하는 계절은 어떤 계절인가요?",
        "가장 좋아하는 동화 속 캐릭터는 누구인가요?",
        "만약 전세계에 한 가지 문화나 전통을 소개할 수 있다면, 무엇을 선택하겠어요?",
        "만약 시간을 거슬러 갈 수 있다면, 어느 순간으로 돌아가서 무엇을 하고 싶으세요?",
        "가장 기억에 남는 휴가 여행 경험은 어디였나요?",
        "만약 동물의 언어를 이해할 수 있다면, 어떤 동물과 대화하고 싶으세요?",
        "가장 좋아하는 음악 장르는 무엇인가요?",
        "만약 어떤 무기 능력을 가질 수 있다면, 어떤 무기를 선택하겠어요?",
        "만약 시간을 멈출 수 있다면, 어떤 일을 하고 싶으세요?",
        "당신의 가장 좋아하는 도시는 어디인가요?",
        "만약 하루 동안 어떤 동물의 특기를 가질 수 있다면, 어떤 동물의 특기를 원하시나요?",
        "가장 좋아하는 먹거리 중 하나를 만들 수 있다면, 무엇을 만들고 싶으세요?",
        "만약 자동차 모델을 하나 선택할 수 있다면, 어떤 자동차를 선택하겠어요?",
        "만약 과거의 자신에게 한 가지 충고를 줄 수 있다면, 무엇을 말하고 싶으세요?",
        "가장 기억에 남는 유머러스한 상황 중 하나는 무엇이었나요?",
        "만약 돈이나 시간의 제약 없이 취미를 하나 선택할 수 있다면, 무엇을 선택하겠어요?",
        "가장 좋아하는 스포츠나 운동은 무엇인가요?",
        "만약 하루 동안 어떤 유명인과 함께 보낼 수 있다면, 누구와 함께 보내고 싶으세요?",
        "만약 어떤 물건이 마법으로 생명을 가질 수 있다면, 무엇을 선택하겠어요?",
        "가장 좋아하는 책이나 작가는 무엇인가요?",
        "만약 하루 동안 어떤 스포츠 팀의 일원이 될 수 있다면, 어떤 팀에 가입하겠어요?",
        "만약 하늘에서 비 오는 날씨를 조절할 수 있다면, 언제 비를 내릴 건가요?",
        "가장 기억에 남는 생일 선물 중 하나는 무엇이었나요?",
        "만약 어떤 역사적 인물과 대화할 수 있다면, 누구와 대화하고 싶으세요?",
        "만약 하루 동안 어떤 유명한 예술가의 작품을 만들 수 있다면, 어떤 작품을 만들고 싶으세요?",
        "가장 좋아하는 계절과 관련된 활동은 무엇인가요?",
        "만약 오늘 하루 동안 어떤 동화나 소설 속 캐릭터가 되어 볼 수 있다면, 누구가 되고 싶으세요?",
        "만약 하루 동안 어떤 과일을 자유롭게 수확할 수 있다면, 어떤 과일을 선택하겠어요?",
        "가장 기억에 남는 여행 경험 중 하나는 무엇이었나요?",
        "만약 하루 동안 어떤 역사적 시대로 시간 여행할 수 있다면, 어떤 시대로 가고 싶으세요?",
        "만약 오늘 하루 동안 어떤 스포츠 스타의 실력을 빌려 사용할 수 있다면, 누구의 실력을 빌리고 싶으세요?",
        "가장 좋아하는 음식을 한 가지만 먹을 수 있다면, 무엇을 선택하겠어요?",
        "만약 하루 동안 어떤 영화 캐릭터가 되어 볼 수 있다면, 누구가 되고 싶으세요?",
        "만약 전세계에서 한 가지 언어만 할 수 있다면, 어떤 언어를 선택하겠어요?",
        "가장 좋아하는 휴가 여행지 중 하나는 어디였나요?",
        "오늘 어떤 일이 있었나요?",
        "오늘 날씨는 어땠어요?",
        "어제 무슨 일로 하루를 마무리했나요?",
        "오늘 먹은 음식 중에서 어떤 것이 제일 맛있었나요?",
        "주말에 어떻게 보내려고 계획하고 있나요?",
        "오늘 새로운 사람을 만나거나 새로운 친구를 사귀었나요?",
        "가장 최근에 본 영화나 TV 프로그램은 무엇이었나요?",
        "최근에 읽은 책 중에서 어떤 책을 가장 좋아했나요?",
        "오늘 특별한 일이나 순간이 있었나요?",
        "어떤 취미나 관심사를 가지고 있는지 얘기해주세요.",
        "가족 구성원 중에서 누구와 가장 가까운 관계를 형성하고 있나요?",
        "최근에 들은 좋은 노래나 음악은 무엇인가요?",
        "가장 기억에 남는 여행 경험 중 하나를 얘기해주세요.",
        "오늘 일어난 재미있는 에피소드나 사건을 들려주세요.",
        "주말에 계획하고 있는 활동이나 약속이 있나요?",
        "어떤 스포츠나 운동을 좋아하나요?",
        "가족 나들이나 모임 계획이 있나요?",
        "최근에 새로운 레시피를 시도해봤나요?",
        "어떤 목표나 꿈을 향해 노력 중이신가요?",
        "주변 친구나 가족들과 함께한 즐거운 순간을 얘기해주세요.",
        "어떤 재미있는 이야기나 유머러스한 사건을 들려주세요.",
        "가장 좋아하는 계절은 어떤 계절인가요?",
        "최근에 관심을 갖거나 배우고 있는 새로운 기술 또는 분야가 있나요?",
        "어떤 공연이나 이벤트에 참석하려고 계획 중이신가요?",
        "가장 인상 깊었던 여행지나 관광명소는 어디였나요?",
        "가장 좋아하는 음식 재료나 조리법을 공유해주세요.",
        "어떤 미래 계획이나 목표를 가지고 있는지 얘기해주세요.",
        "오늘 일상 생활에서 발견한 흥미로운 것이나 발견을 공유해주세요.",
        "가장 최근에 한 취미나 활동을 시작하게 된 이유는 무엇이었나요?",
        "오늘 무엇을 배우거나 깨달은 것이 있나요?",
        "어떤 영웅이나 역사적 인물을 존경하나요?",
        "오늘 기분이나 감정이 어땠나요?",
        "가장 좋아하는 동물은 무엇인가요?",
        "최근에 본 예술 작품 중에서 어떤 것이 인상 깊었나요?",
        "가장 기억에 남는 사진이나 그림을 얘기해주세요.",
        "가장 좋아하는 휴가 여행지 중 하나는 어디였나요?",
        "어떤 습관이나 루틴을 가지고 있나요?",
        "가족 또는 친구와 함께한 특별한 기념일을 기억해주세요.",
        "최근에 봤던 웃긴 동영상이나 콘텐츠를 추천해주세요.",
        "가장 최근에 한 좋은 행사나 봉사 활동을 얘기해주세요.",
        "어떤 가치나 원칙을 가지고 살고 있나요?",
        "가장 좋아하는 색깔은 무엇인가요?",
        "오늘 하루를 한 마디로 표현한다면 무엇이라고 할까요?",
        "가장 좋아하는 시간을 보내는 장소는 어디인가요?",
        "오늘 들은 어떤 명언이나 인용구가 인상 깊었나요?",
        "최근에 본 좋은 드라마나 영화 추천해주세요.",
        "가장 최근에 한 칭찬이나 감사 인사는 무엇이었나요?",
        "어떤 스킬이나 능력을 향상하고 싶으신가요?",
        "주변 친구나 가족에게 하고 싶은 인사말이나 메시지가 있나요?",
        "오늘 무엇을 하면서 즐거웠나요?"
        ];

    function getRandomQuestion() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const dailyQuestion = dailyQuestions[dayOfYear % dailyQuestions.length];
        const generalQuestion = generalQuestions[Math.floor(Math.random() * generalQuestions.length)];
        return Math.random() < 0.5 ? dailyQuestion : generalQuestion;
    }

    document.getElementById('generateQuestion').addEventListener('click', function() {
        document.getElementById('question').textContent = getRandomQuestion();
    });
});
