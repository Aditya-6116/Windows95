// Virtual filesystem for Station 2 Mock OS
// Each node: { type: 'folder'|'file', name, children?, content?, size?, created?, modified?, hidden? }

const fileSystem = {
  'A:': {
    type: 'drive',
    label: '3½ Floppy (A:)',
    icon: '💾',
    children: {
      'LECTURE.DOC': {
        type: 'file',
        name: 'LECTURE.DOC',
        size: '1.20 KB',
        created: '03/08/1997',
        modified: '03/08/1997',
        content: 'Lecture notes — Thermodynamics 101.\n\nSection 1: Heat transfer...\n[Document continues]',
      },
    },
  },
  'C:': {
    type: 'drive',
    label: 'Local Disk (C:)',
    icon: '💿',
    children: {
      Documents: {
        type: 'folder',
        name: 'Documents',
        children: {
          'BUDGET_98.XLS': {
            type: 'file',
            name: 'BUDGET_98.XLS',
            size: '18.4 KB',
            created: '01/15/1998',
            modified: '02/20/1998',
            content: 'Access denied.',
            accessDenied: true,
          },
          'MEETING_NOTES.TXT': {
            type: 'file',
            name: 'MEETING_NOTES.TXT',
            size: '3.1 KB',
            created: '09/10/1998',
            modified: '09/10/1998',
            content:
              'Meeting Notes — 09/10/1998\n\nAttendees: D. Varma, K. Singh, R. Mehta\n\nAgenda:\n1. Lab schedule review\n2. Equipment procurement\n3. Publication deadlines\n\nAction items:\n- Varma to submit grant renewal by Oct 1\n- Singh to order reagents\n- Mehta to draft paper abstract\n\n[End of notes]',
          },
          'INVOICE_AUG.TXT': {
            type: 'file',
            name: 'INVOICE_AUG.TXT',
            size: '1.8 KB',
            created: '08/31/1998',
            modified: '08/31/1998',
            content:
              'INVOICE — August 1998\n\nVendor: Sigma Scientific\nOrder #: SS-4471\n\nItems:\n- Reagent Kit A   x4   ₹ 2,400\n- Glass slides    x200  ₹   800\n- Filter paper    x50   ₹   300\n\nTotal: ₹ 3,500\n\nStatus: PAID',
          },
          'PERSONAL_NOTES.TXT': {
            type: 'file',
            name: 'PERSONAL_NOTES.TXT',
            size: '0.9 KB',
            created: '11/02/1998',
            modified: '11/02/1998',
            content: 'Access denied.',
            accessDenied: true,
          },
          'REPORT_NOV.TXT': {
            type: 'file',
            name: 'REPORT_NOV.TXT',
            size: '4.5 KB',
            created: '11/01/1998',
            modified: '11/15/1998',
            content:
              'Monthly Laboratory Report — November 1998\n\nPrincipal Investigator: Dr. D. Varma\nDepartment: Applied Research Division\n\nSummary:\nExperiments conducted this month focused on baseline readings. Results are within expected parameters.\n\nEquipment status: Operational\nSample inventory: Adequate\nNext review: December 1998\n\n[Signed: D. Varma]',
          },
        },
      },
      'Program Files': {
        type: 'folder',
        name: 'Program Files',
        children: {
          Accessories: {
            type: 'folder',
            name: 'Accessories',
            children: {
              'README.TXT': {
                type: 'file',
                name: 'README.TXT',
                size: '0.5 KB',
                created: '04/01/1998',
                modified: '04/01/1998',
                content: 'Accessories installation notes.\n\nVersion: 2.1\nInstalled: April 1998',
              },
            },
          },
          'Lab Utilities': {
            type: 'folder',
            name: 'Lab Utilities',
            children: {
              'DATALOG.EXE': {
                type: 'file',
                name: 'DATALOG.EXE',
                size: '142 KB',
                created: '06/12/1997',
                modified: '06/12/1997',
                content: 'This file is an executable application.',
              },
            },
          },
        },
      },
      Windows: {
        type: 'folder',
        name: 'Windows',
        children: {
          System: {
            type: 'folder',
            name: 'System',
            children: {
              'KERNEL.DLL': {
                type: 'file',
                name: 'KERNEL.DLL',
                size: '88.0 KB',
                created: '01/01/1997',
                modified: '01/01/1997',
                content: 'System file. Do not modify.',
              },
              'SHELL.DLL': {
                type: 'file',
                name: 'SHELL.DLL',
                size: '64.0 KB',
                created: '01/01/1997',
                modified: '01/01/1997',
                content: 'System file. Do not modify.',
              },
            },
          },
          Temp: {
            type: 'folder',
            name: 'Temp',
            children: {
              'TMP0001.TMP': {
                type: 'file',
                name: 'TMP0001.TMP',
                size: '0.1 KB',
                created: '12/03/1998',
                modified: '12/03/1998',
                content: 'Temporary file.',
              },
            },
          },
        },
      },
      Lab: {
        type: 'folder',
        name: 'Lab',
        children: {
          Records: {
            type: 'folder',
            name: 'Records',
            children: {
              'ACCESS_LOG.TXT': {
                type: 'file',
                name: 'ACCESS_LOG.TXT',
                size: '3.7 KB',
                created: '12/04/1998',
                modified: '12/04/1998',
                content:
                  'SYSTEM ACCESS LOG\n═══════════════════════════════\n\n23:18   SYSTEM        BOOT\n23:21   PROJECT-ECHO  ACCESS\n23:26   A-17          LOGIN SUCCESS\n23:27   SYSTEM        ACTIVE\n23:28   A-17          LOGIN SUCCESS\n23:31   CCTV          ACCESS\n23:37   PROJECT-ECHO  MODIFY\n23:43   SYSTEM        SHUTDOWN\n\n═══════════════════════════════\nEnd of log — 04/12/1998',
              },
              'README.TXT': {
                type: 'file',
                name: 'README.TXT',
                size: '2.41 KB',
                created: '12/03/1998',
                modified: '12/04/1998',
                content:
                  'README.TXT\n\nIf you are looking for evidence,\ndo not look outside.\n\nEverything you need is already here.\n\nSome things are easier to notice than others.\n\n— D.V.',
                isReadme: true,
              },
              'EXPERIMENT_01.TXT': {
                type: 'file',
                name: 'EXPERIMENT_01.TXT',
                size: '5.2 KB',
                created: '10/15/1998',
                modified: '11/20/1998',
                content:
                  'Experiment Log — Series 01\n\nObjective: Baseline calibration\nDate range: October–November 1998\n\nResults: Nominal\nObservations: No anomalies detected in phase 1.\n\n[Data tables follow — 12 pages]',
              },
              'ECHO-ARCHIVE': {
                type: 'file',
                name: 'ECHO-ARCHIVE',
                size: '0 KB',
                created: '12/01/1998',
                modified: '12/03/1998',
                content: 'Access denied.',
                accessDenied: true,
              },
            },
          },
          Research: {
            type: 'folder',
            name: 'Research',
            children: {
              'PROJECT-ECHO-NOTES': {
                type: 'file',
                name: 'PROJECT-ECHO-NOTES',
                size: '0 KB',
                created: '11/15/1998',
                modified: '12/01/1998',
                content: 'Access denied.',
                accessDenied: true,
              },
              'PHASE2_DATA.TXT': {
                type: 'file',
                name: 'PHASE2_DATA.TXT',
                size: '11.0 KB',
                created: '11/01/1998',
                modified: '11/28/1998',
                content:
                  'Phase 2 Research Data\n\nParameters recorded at intervals of 30 minutes.\nAll readings nominal.\n\n[Tabular data — 40 rows]',
              },
            },
          },
          'Old Reports': {
            type: 'folder',
            name: 'Old Reports',
            children: {
              'ANNUAL_97.TXT': {
                type: 'file',
                name: 'ANNUAL_97.TXT',
                size: '8.4 KB',
                created: '01/10/1998',
                modified: '01/10/1998',
                content:
                  'Annual Report 1997\n\nLaboratory: Applied Research Division\nDirector: Dr. D. Varma\n\nHighlights:\n- 3 publications submitted\n- 2 grants renewed\n- New spectrometer installed\n\nLooking ahead to 1998...',
              },
              'ANNUAL_96.TXT': {
                type: 'file',
                name: 'ANNUAL_96.TXT',
                size: '7.1 KB',
                created: '01/08/1997',
                modified: '01/08/1997',
                content: 'Annual Report 1996\n\n[Content archived — contact records office]',
              },
            },
          },
        },
      },
      Temp: {
        type: 'folder',
        name: 'Temp',
        children: {
          'CACHE001.DAT': {
            type: 'file',
            name: 'CACHE001.DAT',
            size: '12.0 KB',
            created: '12/04/1998',
            modified: '12/04/1998',
            content: 'Binary cache file.',
          },
        },
      },
      Users: {
        type: 'folder',
        name: 'Users',
        children: {
          Varma: {
            type: 'folder',
            name: 'Varma',
            children: {
              Desktop: { type: 'folder', name: 'Desktop', children: {} },
              'My Documents': { type: 'folder', name: 'My Documents', children: {} },
              'Personal.TXT': {
                type: 'file',
                name: 'Personal.TXT',
                size: '0 KB',
                created: '10/01/1998',
                modified: '10/01/1998',
                content: 'Access denied.',
                accessDenied: true,
              },
            },
          },
        },
      },
    },
  },
  'D:': {
    type: 'drive',
    label: 'CD Drive (D:)',
    icon: '📀',
    children: {},
    empty: true,
    emptyMessage: 'No disc inserted.',
  },
  'Z:': {
    type: 'drive',
    label: 'Network Drive (Z:)',
    icon: '🌐',
    children: {
      'LAB-SHARED': {
        type: 'folder',
        name: 'LAB-SHARED',
        children: {
          'SCHEDULE.TXT': {
            type: 'file',
            name: 'SCHEDULE.TXT',
            size: '2.0 KB',
            created: '09/01/1998',
            modified: '09/01/1998',
            content: 'Lab Schedule — Q4 1998\n\nMonday: Equipment calibration\nTuesday–Thursday: Experiments\nFriday: Report writing\n\n[Contact K. Singh for changes]',
          },
        },
      },
    },
  },
};

export default fileSystem;
