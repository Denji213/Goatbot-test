module.exports = {
	// You can customize the language here or directly in the command files
	autoUpdateThreadInfo: {},
	checkwarn: {
		text: {
			warn: "Member %1 has been warned 3 times before and has been banned from the chat box\n- Name: %1\n- Uid: %2\n- To unban, please use the \"%3warn unban <uid>\" command (with uid is the uid of the person you want to unban)",
			needPermission: "Bot needs administrator permission to kick banned members"
		}
	},
	leave: {
		text: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			leaveType1: "left the group",
			leaveType2: "was kicked from the group"
		}
	},
	logsbot: {
		text: {
			title: "====== Bot logs ======",
			added: "\n✅\nEvent: bot has been added to a new group\n- Added by: %1",
			kicked: "\n❌\nEvent: bot has been kicked\n- Kicked by: %1",
			footer: "\n- User ID: %1\n- Group: %2\n- Group ID: %3\n- Time: %4"
		}
	},
	onEvent: {},
	welcome: {
		text: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			welcomeMessage: "➪ 𝘓𝘶𝘹 𝘛𝘺𝘭𝘦𝘳\n➪ 𝘉𝘰𝘵 𝘱𝘳𝘦𝘧𝘪𝘹: %1\n➪ 𝘔𝘺 𝘤𝘮𝘥 𝘭𝘪𝘴𝘵𝘦 : %1help\n➪ 𝘔𝘺 𝘤𝘳𝘦𝘢𝘵𝘰𝘳:𝙍𝙚𝙣𝙟𝙞 𝙎𝙩𝙖𝙧𝙛𝙖𝙡𝙡",
			multiple1: "you",
			multiple2: "you guys"
		}
	}
};
